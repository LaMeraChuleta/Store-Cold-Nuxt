use neon::prelude::*;
//STD
use std::path::PathBuf;
use std::str::FromStr;
use std::vec::Vec;
//BASE64 A BLOB
use blob::Blob;
//CALIDAD DE IMAGEN
use image::jpeg;
use image::load_from_memory;
use image::imageops::FilterType;
use image::GenericImageView;

fn guardar(mut cx: FunctionContext) -> JsResult<JsString> {


    let objeto_id = cx.argument::<JsObject>(1)?.as_value(&mut cx);

    let vecbase64: Handle<JsArray> = cx.argument(0)?;
    let vecbase64: Vec<Handle<JsValue>> = vecbase64.to_vec(&mut cx)?;
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
    vecblob
        .iter()
        .for_each(|blob| {
            let mut ruta_dest = PathBuf::from("C:/StoreCold/HOLA.jpeg"); 
            let imgIn = load_from_memory(blob.as_ref()).unwrap();
            imgIn.save(ruta_dest).unwrap();
        });
    Ok(cx.string("hello node"))
}

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {

    Ok(cx.string("hello node"))
}


register_module!(mut cx, { 
    
    cx.export_function("hello", hello)?; 
    cx.export_function("guardar",guardar)?; 
    Ok(())
});
