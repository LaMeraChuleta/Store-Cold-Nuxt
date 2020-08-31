use neon::prelude::*;
//STD
use std::path::PathBuf;
use std::str::FromStr;

use std::fs;
use std::io::prelude::*;
use std::vec::Vec;
//BASE64 A BLOB
use blob::Blob;
//CALIDAD DE IMAGEN
//use image::jpeg;
use image::load_from_memory;
//use image::imageops::FilterType;
//use image::GenericImageView;
//BIBLIOTECA GENERAR INFO PATH
mod infopath;

fn generar_ruta_id(mut cx: FunctionContext) -> JsResult<JsObject> {

    let vecbase64: Handle<JsArray> = cx.argument(0)?;
    let vecbase64: Vec<Handle<JsValue>> = vecbase64.to_vec(&mut cx)?;
    let objeto_id = cx.argument::<JsObject>(1)?.as_value(&mut cx);
    //Retorna tupla (PathBufer, ID)
    let nuevoinfo = infopath
        ::InfoPath
        ::nuevo_info(
            objeto_id, 
            &mut cx
        );
    let info_destino = nuevoinfo.generar_ruta();
    //CONVIERTE BASE64 A BLOB 
    let vecblob: Vec<Blob> = vecbase64
        .iter()
        .map(|jsvalue| {
            let jsvalue = jsvalue
                .downcast::<JsString>()
                .unwrap()                
                .value();
            Blob::from_str(&jsvalue)
                .unwrap()
        }).collect();
    //DISMINUYE LA CALIDAD DE LA IMAGEN 
    let mut incrementable: i32 = 1;
    vecblob
        .iter()
        .for_each(|blob| {
            let mut _ruta_dest = PathBuf::from(&info_destino.0); 
            let mut _nombre_foto = String::from(nuevoinfo.titulo
                .split_whitespace()
                .collect::<String>());

            _nombre_foto.push_str(&incrementable.to_string());
            _ruta_dest.push(_nombre_foto);
            _ruta_dest.set_extension("jpeg");
    
            let img_in = load_from_memory(blob.as_ref()).unwrap();
            img_in.save(_ruta_dest).unwrap();
            incrementable += 1;
        });
    
    //Crear objeto JS
    let ruta_id_object = JsObject::new(&mut cx);
    let id = cx.string(info_destino.1);
    let ruta = cx.string(info_destino.0
        .to_str()
        .unwrap()
    );
    ruta_id_object.set(&mut cx, "id", id).unwrap();
    ruta_id_object.set(&mut cx, "ruta", ruta).unwrap();
    

    Ok(ruta_id_object)
}

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {

    let ruta_dir = cx.argument::<JsString>(0)?.value();
    let ruta_dir = PathBuf::from_str(&ruta_dir).unwrap();

    if ruta_dir.is_dir(){
        for file_img in fs::read_dir(ruta_dir).unwrap() {

            match file_img {
                Ok(dir_img) => {

                    
                    let mut vec_img = Vec::new();
                    let mut imagen = fs::File::open(dir_img.path()).unwrap();
                    
                    imagen.read_to_end(&mut vec_img).unwrap();

                    //println!("{:?}", vec_img);
                    
                },
                Err(err) => println!("{:?}",err)
            }
        }
    }

    Ok(cx.string("hello node"))
}

register_module!(mut cx, { 
    
    cx.export_function("hello", hello)?; 
    cx.export_function("generar_ruta_id",generar_ruta_id)?; 
    Ok(())
});
