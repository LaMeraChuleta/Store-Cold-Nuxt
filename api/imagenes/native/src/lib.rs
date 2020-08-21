use neon::prelude::*;



use blob::Blob;

use std::collections::HashMap;
use std::path::PathBuf;
use std::str::FromStr;
use std::vec::Vec;

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {

    Ok(cx.string("hello node"))
}


use image::jpeg;
use image::load_from_memory;
use image::imageops::FilterType;

use image::GenericImageView;

fn guardar(mut cx: FunctionContext) -> JsResult<JsString> {

    let strBase64 = cx.argument::<JsString>(0)?.value();
    let blobImg: Blob = Blob::from_str(&strBase64).unwrap();
    let blobImg = blobImg.into_vec();

    let imgIn = load_from_memory(&blobImg).unwrap();
    imgIn.save("mode.jpeg").unwrap();
    
    Ok(cx.string("hello node"))
}

register_module!(mut cx, { 
    cx.export_function("hello", hello)?; 
    cx.export_function("guardar",guardar)?; 
    Ok(())
});
