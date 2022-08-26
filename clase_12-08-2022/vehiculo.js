 export default class Vehiculo{
//cambiar las comillas
    modelo = ''

    constructor(kilometraje)
    {
        this.km = kilometraje

    }

    mostrar_kilometraje()
    {
        console.log(`el kilometraje de mi vehiculo es igual a ${this.km}km`)
    }

    mostar_modelo()
    {
        console.log(this.modelo)
    }
}