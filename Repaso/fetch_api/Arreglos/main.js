let helados=['Banan Split','Menta Granizada','Cereza','Dulce de leche','Maracuya','Vainilla','Frutos Rojos','Pistacho']
//como obtner la longitud de un arreglo
let longitud=helados.length
console.log('Longitud:'+longitud)
//como obtengo el ultimo elemento de un arreglo (array)
let ultimo=helados[longitud-1]
console.log('Ultimo elemento:'+ ultimo)
//como agrego un elemnto al final de un arreglo
helados.push('Crema Rusa')
console.log(helados)
//como eliminar el ultimo elemento de un arreglo 
helados.pop()
console.log(helados)
//como agrego un elemento al incio de un arreglo
helados.unshift('Marroc')
console.log(helados)
//como eliminar el primer elemento de un arreglo
helados.shift()
console.log(helados)
//como obtener el indcie (posicion) de un elemento
let indice_cereza=helados.indexOf('Cereza')
console.log('indice de cereza:'+indice_cereza)
console.log(helados[indice_cereza])
//elimino un elemento conociendo su indice 
helados.splice(indice_cereza,1)
console.log(helados)
//como arego mas de un elemento dentro del arreglo
helados.slice(1,0,'dulce de leche')
console.log(helados)
