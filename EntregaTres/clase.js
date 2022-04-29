const express = require('express')
const app = express();
const PORT = 8080
app.listen(8080);
console.log(`Servidor http escuchando en el puerto ${PORT}`)

app.get('/', (req, res)=>{
    res.send('<h1 style="color:blue;"> Bienvenidos al servidor express</h1>')
})
app.get('/productos', (req, res) =>{

})
app.get('/productosRandom', (req, res) =>{

})
