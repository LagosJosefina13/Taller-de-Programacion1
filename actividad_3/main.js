async function generar_tabla(){
    let datos= await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    let comentarios = await datos.json()
    let filas=[]
    comentarios.forEach(element => {
        let fila=` 
        <tr>
        <td>${element.symbol}</td>
        <td>${element.name}</td> 
        <td><img style="width:4rem" src="${element.image}"></img></td>
        <td>${element.total_volume}</td>

         </tr>
        `
        filas.push(fila)
    });
    document.getElementById("Cripto").innerHTML=filas.join('')
}
generar_tabla()