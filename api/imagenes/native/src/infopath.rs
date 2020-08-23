use neon::prelude::*;
use std::string::String;
use std::fs::DirBuilder;

pub struct InfoPath {
    artista: String,
    titulo: String,
    year: String
}

impl InfoPath {
     // add code here
     pub fn nuevo_info(arg: Handle<JsValue>,  cx: &mut FunctionContext) -> Self {

        let artista = arg
            .downcast::<JsObject>().unwrap()
            .get(cx, "artista").unwrap()
            .downcast::<JsString>().unwrap()
            .value();

        let titulo = arg
            .downcast::<JsObject>().unwrap()
            .get(cx, "titulo").unwrap()
            .downcast::<JsString>().unwrap()
            .value();

        let year = arg
            .downcast::<JsObject>().unwrap()
            .get(cx, "year").unwrap()
            .downcast::<JsString>().unwrap()
            .value(); 
        InfoPath {
           artista,
           titulo,
           year
        }   
    }
    pub fn generar_ruta(&self) -> String {  

        InfoPath::buscar_dir(&self.artista);
        String::from("RETURN")
    }
    fn buscar_dir(carpeta: &String) -> String {

        let path = format!("C:/StoreCold/{}",carpeta);
        let exist = DirBuilder::new()
            .recursive(true)
            .create(path);

        println!("{:?}",exist);

        String::from("DIR")
    }
    fn generar_id(&self) -> String {

        let mut id = String::new();


        id
    }
 
}
    
   
    