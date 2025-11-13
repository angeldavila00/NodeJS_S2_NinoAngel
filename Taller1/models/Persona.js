// models Persona.js

class Persona {
    constructor(titulo, nombre, segundoNombre, apellido1, apellido2, direccion){
        this.titulo = titulo || '';
        this.nommbre = nombre;
        this.segundoNombre = segundoNombre || '';
        this.apellido1 = apellido1;
        this.apellido2 = apellido2 || '';
        this.direccion = direccion;
    }

    get nombreCompleto (){
        const partes = [
            this.titulo,
            this.nombre,
            this.segundoNombre,
            this.apellido1,
            this.apellido2
        ].filter (parte => parte && parte.trim() !== '');
        return partes.join(' ').trim();
    }
    mostrarInfo(){
        return `${this.nombreCompleto} - Direccion: ${this.direccion}`
    }
}

module.exports = Persona;