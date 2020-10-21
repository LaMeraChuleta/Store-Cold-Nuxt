use std::path::PathBuf;
use std::io::Write;
use actix_files as fs;
use actix_files::NamedFile;
use actix_web::{HttpRequest, Result};
use actix_web::http::header::{ContentDisposition, DispositionType};
use actix_web::{get, web, App, HttpResponse, HttpServer};
use actix_web::Error;
use actix_multipart::Multipart;
use actix_cors::Cors;
use actix_web::http::header;

const RUTA: &str = r"C:\StoreCold\";


use futures::{StreamExt, TryStreamExt};

async fn save_file(mut payload: Multipart) -> Result<HttpResponse, Error> {
    // iterate over multipart stream
    println!("Cargando ...");
    while let Ok(Some(mut field)) = payload.try_next().await {
        let content_type = field.content_disposition().unwrap();
        let _filename = content_type.get_filename().unwrap();
        let filepath = format!("{}/{}", RUTA, _filename);

        // File::create is blocking operation, use threadpool
        let mut f = web::block(move || std::fs::File::create(filepath))
            .await
            .unwrap();

        // Field in turn is stream of *Bytes* object
        while let Some(chunk) = field.next().await {
            let data = chunk.unwrap();
            // filesystem operations are blocking, we have to use threadpool
            f = web::block(move || f.write_all(&data).map(|_| f)).await?;
        }
    }
    Ok(HttpResponse::Ok().into())
}

async fn get_imagen(req: HttpRequest) -> Result<NamedFile> {

    let path: PathBuf = req.match_info()
        .query("filename")
        .parse()
        .unwrap();    
    Ok(NamedFile::open(path)?)
}

#[get("imagen/{filename:.*}")]
async fn index(req: HttpRequest) -> Result<fs::NamedFile, Error> {
    
    let mut path = std::path::PathBuf::from(RUTA);
    path.push(req.match_info().query("filename"));
    let file = fs::NamedFile::open(path)?;
    Ok(file
        .use_last_modified(true)
        .set_content_disposition(ContentDisposition {
            disposition: DispositionType::Attachment,
            parameters: vec![],
        }))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    HttpServer::new( || {
        App::new() 
        .wrap(Cors::default()
            .allowed_origin("http://localhost:3000")
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
            .allowed_header(header::CONTENT_TYPE)
            .allowed_header(header::ACCESS_CONTROL_ALLOW_ORIGIN)
            .supports_credentials()
            .max_age(3600),
        )
        .service(index)
        .route("/", web::post().to(save_file))
        //.route("/imagen/{filename:.*}", web::get().to(get_imagen))            
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}