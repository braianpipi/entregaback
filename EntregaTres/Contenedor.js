// Consigna
// 1) Realizar un proyecto de servidor basado en node.js que utilice el modulo express
// e implemente los siguientes endpoints en el puerto 8080:
//  a) Ruta get'/productos' que devuelva un array con todos los productos disponibles en el servidor
//  b)Ruta get'/productosRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
// 2) Incluir un archivo de texto 'productos.txt' y utilizar una clase Contenedor del desafio anterior para acceder 
// a los datos persistidos del servidor.
// Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos 
// como en el desafio anterior.

const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
  }

  async leer() {
    const data = await fs.promises.readFile(this.file, "utf-8");
    const dataJson = JSON.parse(data);
    return dataJson;
  }

  async save(objeto) {
    try {
      let informacion = await this.leer();
      let idUltimo = informacion.map((producto) => producto.id);
      let idAsignado = Math.max(...idUltimo);
      idAsignado++;
      objeto = {
        id: idAsignado,
        title: objeto.title,
        price: objeto.price,
        thumbail: objeto.thumbail,
      };
      informacion.push(objeto);
      await fs.promises.writeFile(this.file, `${JSON.stringify(informacion)}`);
      return `El id asignado a tu producto es ${idAsignado}`;
    } catch (error) {
      console.log("error", error);
    }
  }
  async getByAll() {
    try {
      let informacion = await this.leer();
      return informacion;
    } catch (error) {
      console.log("error", error);
    }
  }
  async getById(idBuscado) {
    try {
      let informacion = await this.leer();
      let productoId = await informacion.find(
        (producto) => producto.id === idBuscado
      );
      return productoId === undefined
        ? `No se encontro el producto con el Id ${idBuscado}`
        : productoId;
    } catch (error) {
      console.log("error", error);
    }
  }
  async deleteById(idEliminar) {
    try {
      let informacion = await this.leer();
      let objetoEliminar = informacion.filter(
        (informacion) => informacion.id !== idEliminar
      );
      await fs.promises.writeFile(
        this.file,
        `${JSON.stringify(objetoEliminar)}`
      );
      return objetoEliminar;
    } catch (error) {
      console.log("error", error);
    }
  }
  deleteAll() {
    try {
      let informacion = [];
      fs.promises.writeFile(this.file, `${JSON.stringify(informacion)}`);
      return informacion;
    } catch (error) {
      console.log("error", error);
    }
  }
}
module.exports = Contenedor;