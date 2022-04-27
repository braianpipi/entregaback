const Contenedor = require('./entregaDos')


let contenedor = new Contenedor("./productos.txt");

contenedor.save({"title": "asass","price": 2, "thumbail": "asdsadas.jpg"});
// console.log(contenedor.getById(2))
console.log(contenedor.save())
// contenedor.getByAll();
// contenedor.getById(1);
// contenedor.deleteById(1)
// contenedor.deleteAll()