class Email {
  constructor(destinatario) {
    this.destinatario = destinatario;
  }

  enviarCorreo(mensaje) {
    // Lógica interna compleja omitida
    console.log(`Enviando correo a ${this.destinatario} con mensaje: ${mensaje}`);
  }
}
module.exports=Email;