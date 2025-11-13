const Persona = require('./Persona');

class Paciente extends Persona{
    constructor(titulo,nombre,segundoNombre,apellido1,apellido2,direccion,fechaNacimiento,diagnostico){
        super(titulo, nombre, segundoNombre, apellido1, apellido2, direccion);
        this.fechaNacimiento = fechaNacimiento;
        this.diagnostico = diagnostico;
        this.pabellon = null;
    }

    calcularEdad(fechaReferencia = new Date()){
        let edad = fechaReferencia.getFullYear() - this.fechaNacimiento.getFullYear();

        let mes = fechaReferenciaa.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && fechaReferencia.getDate() < this.fechaNacimiento.getDate())){
            edad--;
        }
        return edad;
    }

    asignarPabellon(pabellon){
        if(pabellon.tieneCupo()){
            this.pabellon = pabellon;
            pabellon.asignarPabellon(this);
            return true;
        }
        return false;
    }

    mostrarInfo(){
        const edad = this.calcularEdad();
        const pabellonInfo = this.pabellon ? `Pabellon: ${this.pabellon.nombre}` : `Sin asignar`;
        return `${super.mostrarInfo()} | Edad: ${edad} año | Diagnostico: ${this.diagnostico} | ${pabellonInfo}`;
    }
}

module.exports = Paciente;