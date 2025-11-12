````mermaid
---
config:
  look: neo
  theme: mc
  layout: elk
---
classDiagram
direction TB
class Persona {
  +titulo: String
  +nombre: String
  +segundoNombre: String
  +apellido1: String
  +apellido2: String
  +direccion: String
}
class Paciente {
  +fechaNacimiento: Date
  +fechaIngreso: Date
  +diagnostico: String
}
class Personal {
  +fechaVinculacion: Date
  +salario: Number
  +categoria: String  // "Administrativo" | "Tecnico" | "Operaciones"
}
class Administrativo {
  +tipoEspecialidad: String
}
class Tecnico {
  +tipoTecnico: String  // "Tecnico" | "Tecnologia"
}
class Operaciones {
  +rol: String // "Doctor" | "Enfermera"
}
class Doctor {
  +nivel: String // "Asociado" | "Junior"
}
class Enfermera {
	+nombre: String
}
class Hospital {
  +nombre: String
  +direccion: String
}
class Departamento {
  +nombre: String
}
class Pabellon {
  +nombre: String
  +capacidad: Number
}
class EquipoMedico {
  +tipoEquipo: String
}
class Vinculacion {
  +fechaInicio: Date
  +fechaFin: Date
}
class Atencion {
  +fecha: Date
  +tipo: String
  +observacion: String
}
Paciente --|> Persona
Personal --|> Persona
Administrativo --|> Personal
Tecnico --|> Personal
Operaciones --|> Personal
Doctor --|> Operaciones
Enfermera --|> Operaciones
Hospital "1" o-- "1..*" Departamento : tiene
Hospital "1" o-- "1..*" Pabellon : tiene
Hospital "1" -- "0..*" Vinculacion : emplea >
Vinculacion "1" -- "1" Personal : < persona
Vinculacion "1" -- "1" Departamento : depto
Operaciones "1" -- "0..*" Atencion : realiza >
Paciente "1" -- "0..*" Atencion : recibe <
Pabellon "1" -- "0..*" Paciente : aloja >
Paciente "0..1" -- "1" Pabellon : asignado a
EquipoMedico "1" -- "1" Doctor : lider
EquipoMedico "1" -- "1..*" Doctor : miembros
Persona "0..*" -- "0..*" Hospital : asociadoCon

````

