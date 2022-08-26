import Pitagora from "./pitagora.js"
const calcular = () => {
    let instancia= new Pitagora()
    instancia.cateto_adyacente = document.getElementById("inp_CA").value
    instancia.cateto_opuesto = document.getElementById("inp_CO").value
    instancia.calcular_hipotenusa()
}
document.getElementById("btn_calcular").addEventListener("click",calcular)