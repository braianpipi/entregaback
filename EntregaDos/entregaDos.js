// Consigna : Implementar programa que contenga  una clase llamada Contenedor que reciba el nombre del archivo que
// reciba el nombre del archivo con el que va a trabajar  e implementar los siguientes metodos:

// save(object): Number - Recibe un objeto  , lo guarda en un archivo, devuelve el id asignado.
// getById(number): Object- Recibe un id y devuelve el objeto con ese id , o null  si no esta.
// getByAll(): Object []-Devuelve un array con los objetos presentes en el archivo .
// deleteById(Number): void-Elimina el archivo el objeto buscado con el id buscado.
// deleteAll():void. Elimina todos los objetos presentes en el archivo .

// Aspectos a incluir en el entregable:
// - El metodo save incorpora al producto un id numerico, que debera ser siempre uno mas que el id del ultimo objeto
// (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
// Tomar en consideracion el contenido previo del archivo , en caso de utilizar uno existente.
// Implementar el manejo de archivos con el modulo fs de node.js, utilizando promesas con async/await y manejo de errores.
// Probar el modulo creando un contenedor productos, que se guarde en un archivo:"productos.txt"
// Incluir un llamado de prueba de cada metodo, y mostrado por pantalla segun corresponda para verificar el correcto
// funcionamiento del modulo construido
// El formato de cada producto sera:
// {
//     title:{nombre del producto},
//     price:{precio},
//     thumbnail:{url de la foto del producto}
// }

const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
  }
  async save(objeto) {
    try {
      let informacion = await fs.promises.readFile(this.file, "utf-8");
      informacion = JSON.parse(informacion);
      let idUltimo = informacion.map((producto) => producto.id);
      let idAsignado = Math.max(...idUltimo);
      idAsignado ++;
      objeto = {
        id: idAsignado,
        title: objeto.title,
        price: objeto.price,
        thumbail: objeto.thumbail,
      };
      informacion.push(objeto);
      await fs.promises.writeFile(this.file, `${JSON.stringify(informacion)}`);
      return console.log(`El id asignado a tu producto es ${idAsignado}`);
    } catch (error) {
      console.log("error", error);
    }
  }
  async getByAll() {
    try {
      let informacion = await fs.promises.readFile(this.file, "utf-8");
      informacion = JSON.parse(informacion);
      return console.log(informacion);
    } catch (error) {
      console.log("error", error);
    }
  }
  async getById(idBuscado) {
    try {
      let informacion = await fs.promises.readFile(this.file, "utf-8");
      informacion = JSON.parse(informacion);
      let productoId = await informacion.find((e) => e.id === idBuscado);
      return productoId === undefined
        ? console.log(`No se encontro el producto con el Id ${idBuscado}`)
        : console.log(productoId);
    } catch (error) {
      console.log("error", error);
    }
  }
  async deleteById(idEliminar) {
    try {
      let informacion = await fs.promises.readFile(this.file, "utf-8");
      informacion = JSON.parse(informacion);
      let objetoEliminar = informacion.filter(informacion => informacion.id !== idEliminar)
      await fs.promises.writeFile(this.file, `${JSON.stringify(objetoEliminar)}`);
      return console.log(objetoEliminar)
    } catch (error) {
      console.log("error", error);
    }
  }
  async deleteAll(){
      try{
        let informacion = [];
        await fs.promises.writeFile(this.file, `${JSON.stringify(informacion)}`)
        return console.log(informacion)
    } catch (error) {
        console.log("error", error);
      }

  }
}
module.exports = Contenedor

let contenedor = new Contenedor("./productos.txt");

// contenedor.save({"title": "asass","price": 2, "thumbail": "asdsadas.jpg"});
// contenedor.getByAll();
// contenedor.getById(1);
// contenedor.deleteById(1)
// export default Contenedor;
// contenedor.deleteAll()