use neon::prelude::*;
use std::string::String;
use std::fs::DirBuilder;

use std::iter;
use rand::{ Rng, thread_rng };
use rand::distributions::Alphanumeric;

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

        let id = InfoPath::generar_id(&self);
        let ruta = InfoPath::buscar_dir(&self, &id);
        println!("{}",ruta);
        String::from("RETURN")
    }
    fn buscar_dir(&self, id: &String) -> String {

    
        let path = String::from(format!("C:/StoreCold/{}/{}",self.artista.split_whitespace().collect::<String>(),id));
        let exist = DirBuilder::new()
            .recursive(true)
            .create(&path);

        path
    }
    fn generar_id(&self) -> String {

        let mut id = String::new();

        let artista: Vec<&str> = self.artista.split(' ').collect();

        match artista.len() {
            1 => id.push_str(&artista[0][..2]),
            i if i > 1 => {
                
                id.push_str(&artista[0][..2]);
                id.push_str(&artista[1][..2]);
            },
            _ => println!("Error")
        }

        id.push('-');

        let titulo: Vec<&str> = self.titulo.split(' ').collect();

        match titulo.len() {
            1 => id.push_str(&titulo[0][..3]),
            2 => {
                id.push_str(&titulo[0][..1]);
                id.push_str(&titulo[1][..2]);
            },
            i if i > 2 => {
                id.push_str(&titulo[0][..1]);
                id.push_str(&titulo[1][..1]);
                id.push_str(&titulo[2][..1]);
            },
            _ => println!("Error")
        }
        id.push('-');
        id.push_str(&self.year[2..]);
        id.push('-');

        let mut rng = thread_rng();
        let chars: String = iter::repeat(())
                .map(|()| rng.sample(Alphanumeric))
                .take(3)
                .collect();

        id.push_str(chars.as_str());    
        id.to_uppercase()
    }
}
    
   
    