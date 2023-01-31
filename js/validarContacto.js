const nombre = document.getElementById("nombreForm")
const apellido = document.getElementById("apellidoForm")
const email = document.getElementById("mailForm")
const motivo = document.getElementById("motivoForm")
const parrafo = document.getElementById("warningsForm")
let entrar = true

function contacto() {
  let mensaje = ""
  if (!checkNommbre(nombre.value)) {
    mensaje = mensaje + `El nombre no es valido / `
    nombre.setAttribute('style', 'border-left: 4px solid #ff0000');
    nombre.focus();
    entrar = false;
  }
  else {
    mensaje = mensaje + ``
    nombre.setAttribute('style', 'border-left: 4px solid #07e690');
    entrar = true;
  }


  if (!checkApellido(apellido.value)) {
    mensaje = mensaje + `El apellido no es valido / `
    apellido.setAttribute('style', 'border-left: 4px solid #ff0000');
    apellido.focus();
    entrar = (entrar && false);
  }
  else {
    mensaje = mensaje + ``
    apellido.setAttribute('style', 'border-left: 4px solid #07e690');
    entrar = (entrar && true);
  }


  if (!checkMail(email.value)) {
    mensaje = mensaje + `El mail no es valido / `
    email.setAttribute('style', 'border-left: 4px solid #ff0000');
    email.focus();
    entrar = (entrar && false);
  }
  else {
    mensaje = mensaje + ``
    email.setAttribute('style', 'border-left: 4px solid #07e690');
    entrar = (entrar && true);
  }

  if (!entrar) {
    parrafo.innerHTML = `` + mensaje
  } else {

    parrafo.innerHTML = `Enviado... <br>`;

    var myModalEl = document.getElementById('staticBackdrop');
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
    modal.toggle();
    var myModalEl = document.querySelector('#salutacionesModal');
    var modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
    modal.show();
  }

}
function checkNommbre(valor) {
  reNombre = /^(?=.{2,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/
  return (reNombre.test(nombre.value))

}

function checkApellido(valor) {
  reApellido = /^(?=.{2,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/
  return (reApellido.test(apellido.value))

}

function checkMail(valor) {
  reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  return (reEmail.test(email.value))

}
