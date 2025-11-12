// ###########
// P.O.O - Abstracción
// ###########

/*
La abstracción permite simplificar la complejidad ocultando los detalles internos del funcionamiento de un objeto y mostrando
 únicamente lo necesario, mejorando la usabilidad del código y permitiendo que otros desarrolladores usen objetos sin conocer su lógica interna.
*/
const Email = require('./models/Email');
let email1 = new Email('pedro@campuslands.com');
email1.enviarCorreo("Cajasan");