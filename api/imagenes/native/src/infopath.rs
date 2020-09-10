use neon::prelude::*;
use std::string::String;
use std::fs::DirBuilder;
use std::path::PathBuf;

use std::iter;
use rand::{ Rng, thread_rng };
use rand::distributions::Alphanumeric;

use std::vec::Vec;
use std::fs;
use std::io::prelude::*;
use blob::Blob;
use blob::Standard;

pub struct InfoPath {
    artista: String,
    pub titulo: String,
    year: String
}

impl InfoPath {
    
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
    pub fn generar_ruta(&self) -> (std::path::PathBuf, String) {  

        let id = InfoPath::generar_id(&self);
        let ruta = InfoPath::buscar_dir(&self, &id);
        (ruta, id)
    }
    fn buscar_dir(&self, id: &String) -> std::path::PathBuf {

        let mut  path = PathBuf::new();
        path.push(r"C:\");
        path.push("StoreCold");
        path.push(   self.artista
            .split_whitespace()
            .collect::<String>());
        path.push(id);

        DirBuilder::new()
            .recursive(true)
            .create(&path)
            .unwrap();
        path
    }
    fn generar_id(&self) -> String {

        let mut id = String::new();
        let artista: Vec<&str> = self.artista.split(' ').collect();

        match artista.len() {
            1 => {
                match &artista[0].chars().count() {
                    1 => {
                        for _i in 1..4 {
                            id.push_str(&artista[0]);
                        }
                    },
                    2 => {
                        id.push_str(&artista[0]);
                        id.push_str(&artista[0]);
                    },
                    3 => {
                        id.push_str(&artista[0]);
                        id.push_str(&artista[0][..1]);
                    },
                    i if i > &3 => {
                        id.push_str(&artista[0][..4]);
                    },
                    _ => println!("Error")
                }
            },
            i if i > 1 => {
                match &artista[0].chars().count() {
                    1 => {
                        id.push_str(&artista[0]);
                        id.push_str(&artista[0]);
                    },
                    i if i > &1 => {
                        id.push_str(&artista[0][..2]);
                    },
                    _ => println!("Erro")
                }
                match &artista[1].chars().count() {
                    1 => {
                        id.push_str(&artista[1]);
                        id.push_str(&artista[1]);
                    },
                    i if i > &1 => {
                        id.push_str(&artista[1][..2]);
                    },
                    _ => println!("Erro")
                }
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
    
pub struct Base64ConvertTask {

   pub dir_name: PathBuf
}

impl Task for Base64ConvertTask {

    type Output = Vec<String>;
    type Error = String;
    type JsEvent = JsArray;

    fn perform(&self) -> Result<Self::Output, Self::Error> {

        let mut vec_base64: Vec<String> = Vec::new();

        if self.dir_name.is_dir(){
            for file_img in fs::read_dir(&self.dir_name).unwrap() {
                match file_img {
                    Ok(dir_img) => {
                        let mut vec_img = Vec::new();
                        let mut imagen = fs::File::open(dir_img.path()).unwrap();
                        imagen.read_to_end(&mut vec_img).unwrap();
                        let blob_img = Blob::<Standard>::from_vec(vec_img);
                        vec_base64.push(blob_img.encode_base64());
                    },
                    Err(err) => println!("{:?}",err)
                }
            }
        }
        Ok(vec_base64)
    }
    fn complete(self, mut cx: TaskContext, result: std::result::Result<Self::Output, Self::Error>) -> JsResult<Self::JsEvent> {


        let vec_base64 = result.unwrap();
        let js_array_base64 = JsArray::new(&mut cx, vec_base64.len() as u32);

        for (i, obj) in vec_base64.iter().enumerate() {
            let js_string = cx.string(obj);
            js_array_base64.set(&mut cx, i as u32, js_string).unwrap();
        }
        Ok(js_array_base64)
    }


}