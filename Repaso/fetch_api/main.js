//Vamos a crear un objeto 
let datos_personales = {
    nombre: 'Pepito', 
    apellido:'Rodrigez',
    dni:44987654,
    correo:{
        gmail:'pepito@gmail.com',
        outlook:'pepis@outlook.com',
        yahoo:'pepe@yahoo.com.ar',
    },
    edad:25

}
//FORMA 1
/*const gmail= datos_personales.correos.gmail
const outlook=datos_personales.correos.outlook
const  yahoo=datos_personales.correos. yahoo*/

//FORMA 2 DESTRUCTURING OBJECT
const { gmail, yahoo, outlook } = datos_personales.correo
console.log(`
Gmail:${gmail}
Outlook:${outlook}
Yahoo:${yahoo}
`)
//CONSUMO DE API 
async function consumir_api(){
    //Realiza por defecto una solucitud http 
    //Atraves del metodo GET

    let publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts')
    let publicaciones_definitvas= await publicaciones.json()
    publicaciones_definitvas.forEach(element => {
        console.log(element.title)
        
    });
}
consumir_api()


