class Pabellon {
    constructor(nombre, capacidad, diagnostioPermitidos = []){
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.diagnostioPermitidos = diagnostioPermitidos;
        this.pacientes = []
    }
}