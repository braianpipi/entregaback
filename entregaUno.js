// 1) Declarar una clase Usuario
// 2) Hacer que Usuario cuente con los siguientes atributos:
// nombre: string
// apellido : string
// libros: Object[]
// mascostas : string;
// Los valores de los atributos deberan cargarse a traves del constructor,
// al momento de crear las instancias.

// 3) Hacer  que Usuario cuente con los siguientes metodos:
// getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
// addMascotas(String):void.Recibe un nombre de mascota y lo agrega al array de mascotas.
// countMascotas():Number. Retorna la cantidad de mascotas que tiene el usuario.
// addBook(String, String):void. Recibe un String 'nombre' y un string 'autor' y
// debe agregar un objeto :{nombre: String, autor: String} al array de libros del usuario.
// getBookName():String[].Retorna un array con solo los nombres del array de libros del usuario.
// 4) Crear un objeto llamado usuario con valores arbitrarios e invocar sus metodos

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre,
      this.apellido = apellido,
      this.libros = [],
      this.mascotas = []
  }
  getFullName() {
    return(`El nombre completo es ${this.nombre} ${this.apellido}`);
  }
  addMascotas(mascotaNueva) {
    return this.mascotas.push(mascotaNueva)
  }
  countMascotas() {
    return this.mascotas.length
  }
  addBook(titulo, escritor) {
    let libro = {
      nombre: titulo,
      autor: escritor,
    };

    return this.libros.push(libro);
    
  }
  getBookName() {
    return this.libros.map(e => e.nombre);
  }
}

const Hernan = new Usuario(
  "Hernan",
  "Gomez"
);

Hernan.getFullName();
console.log(Hernan.getFullName());
Hernan.addMascotas("Perro");
console.log(Hernan)
console.log(Hernan.mascotas);
Hernan.addBook("Harry Potter 29", "Maria Elena Walsh");
Hernan.addBook("El Principito", "Garcia Marquez");
console.log(Hernan.libros);
Hernan.getBookName();
console.log(Hernan.getBookName())

