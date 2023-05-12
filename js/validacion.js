document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulariocontacto").addEventListener('submit', validarFormulario); 
  });
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('nombre').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
      alert('No ha escrito apellido');
      return;
    }
    var email = document.getElementById('email').value;
    if (email.length == 0) {
      alert('No ha escrito email');
      return;
    }
    var telefono = document.getElementById('telefono').value;
    if (telefono.length == 0) {
      alert('Ingrese telefono');
      return;
    }
    this.submit();
  }