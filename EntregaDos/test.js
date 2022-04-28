const Contenedor = require("./entregaDos");

let contenedor = new Contenedor("./productos.txt");
contenedor.save({ title: "asass", price: 2, thumbail: "asdsadas.jpg" }).then(e => console.log(e))
// contenedor.getByAll();
// contenedor.getById(4).then(e => console.log(e) )
// contenedor.deleteById(1).then(e => console.log(e) )
// console.log(contenedor.deleteAll())



























// const ejecutar = async () => {
//   const resultado = await contenedor.save({ title: "asass", price: 2, thumbail: "asdsadas.jpg" });
//   return resultado;
// };
// console.log(ejecutar())


// Que pasa con las promesas? Pues que las promesas tienen el problema que debemos esperar a que se resuelvan para poder retornar los datos. Para ello, tenemos la notacion 
// const datos = await contenedor.getByAll();
// console.log(datos)
// miPromesa.then(datos => //hago algo con los datos).catch(error => // hago algo con el error)
// o bien la sintaxis Async/Await

// const datos = await miPromesa;
// hago lo necesario con la variable datos