class Usuario {
    constructor(id, nombre, email, rol, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.email = email; 
        this.rol = rol;
        this.fechaCreacion = fechaCreacion;
    }
}

module.exports = Usuario;