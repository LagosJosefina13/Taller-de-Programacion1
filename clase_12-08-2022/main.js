//aca estamos conectando al main con vehiculo
import Vehiculo from "./vehiculo.js"
//funcion flecha
const mostrar= () => {
    const km =document.getElementById("inp_km").value
    //console.log('el kilometraje de mi vehiculo es igual a :'+km+'km')
    //template string
   // console.log(`el kilometraje de mi vehiculo es igual a ${km}km`)
   //creamos la instancia de case que nos va a permitir tener acceso a los metodos y atributos de la clase
   let vehiculo = new Vehiculo(km)
   //ejecute el metodo de la clase
   vehiculo.mostrar_kilometraje()

}
document.getElementById("btn_mostrar").addEventListener("click",mostrar)



//forma dos de enviar datos a la clase
const mostrar_forma2= () =>{
        const mod = document.getElementById("inp_modelo").value
    let vehiculo= new Vehiculo()
    //mod es una constante que guarda los datos que se almacenan en la ID
    vehiculo.modelo = mod
    vehiculo.mostar_modelo()

}
document.getElementById(btn-modelo).addEventListener("click,mostrar_forma2")