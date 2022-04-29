
const Contenedor = require("./Contenedor");
const express = require('express')
const app = express();
const PORT = 8080
app.listen(`${PORT}`);
let contenedor = new Contenedor("./productos.txt");

app.get('/productos', async (req, res)=>{
    res.send(await contenedor.getByAll() )
})
app.get('/productosRandom', async(req, res)=>{
    let i = await contenedor.getByAll()
    let indiceRandom = [Math.floor(Math.random()*i.length)]
    
    console.log(i[indiceRandom])
    res.send(i[indiceRandom])
})
