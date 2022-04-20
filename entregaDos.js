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
