use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use std::sync::Mutex;
use actix_files::NamedFile;
use actix_web::{HttpRequest, Result};
use std::path::PathBuf;
use actix_files as fs;
use actix_web::http::header::{ContentDisposition, DispositionType};
use actix_web::Error;

const RUTA: &str = r"C:\StoreCold\";

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
        .service(index)
        //.route("/imagen/{filename:.*}", web::get().to(get_imagen))            
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}