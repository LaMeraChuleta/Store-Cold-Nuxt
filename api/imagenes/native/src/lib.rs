use neon::prelude::*;
//STD
use std::path::PathBuf;
use std::str::FromStr;
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

fn guardar(mut cx: FunctionContext) -> JsResult<JsString> {

    let vecbase64: Handle<JsArray> = cx.argument(0)?;
    let vecbase64: Vec<Handle<JsValue>> = vecbase64.to_vec(&mut cx)?;

    let objeto_id = cx.argument::<JsObject>(1)?.as_value(&mut cx);
    let nuevoinfo = infopath
        ::InfoPath
        ::nuevo_info(
            objeto_id, 
            &mut cx
        );
    let ruta_dest = nuevoinfo.generar_ruta();
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

            let mut _ruta_dest = PathBuf::from(&ruta_dest); 
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
    Ok(cx.string(ruta_dest.to_str().unwrap()))
}

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {

    Ok(cx.string("hello node"))
}

register_module!(mut cx, { 
    
    cx.export_function("hello", hello)?; 
    cx.export_function("guardar",guardar)?; 
    Ok(())
});
