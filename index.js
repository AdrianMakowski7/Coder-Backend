class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros || [];
    this.mascotas = mascotas || [];
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`
  };

  addMascota(mascota) {
    this.mascotas.push(mascota);
  };

  countMascotas() {
    return this.mascotas.length;
  };

  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  };

  getBookNames() {
    let libros = this.libros.map(libro => {
      return libro.nombre
    })
    return libros;
  };
};


const User = new Usuario('Adrian', 'Makowski', [{ nombre: 'Nunca', autor: '	Ken Follett'},{nombre:'El club de los psicópatas', autor:'John Katzenbach'}], ['Teisco']); 