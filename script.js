const formulario =
document.getElementById("crochetForm");

const nombre =
document.getElementById("nombre");

const correo =
document.getElementById("correo");

const telefono =
document.getElementById("telefono");

const curso =
document.getElementById("curso");

const mensaje =
document.getElementById("mensaje");

const mensajeExito =
document.getElementById("mensajeExito");

nombre.addEventListener("input", () => {

localStorage.setItem(
"lp_nombre",
nombre.value
);

});

correo.addEventListener("input", () => {

localStorage.setItem(
"lp_correo",
correo.value
);

});

telefono.addEventListener("input", () => {

localStorage.setItem(
"lp_telefono",
telefono.value
);

});

curso.addEventListener("change", () => {

localStorage.setItem(
"lp_curso",
curso.value
);

});

mensaje.addEventListener("input", () => {

localStorage.setItem(
"lp_mensaje",
mensaje.value
);

});

window.addEventListener(
"DOMContentLoaded",
() => {

nombre.value =
localStorage.getItem(
"lp_nombre"
) || "";

correo.value =
localStorage.getItem(
"lp_correo"
) || "";

telefono.value =
localStorage.getItem(
"lp_telefono"
) || "";

curso.value =
localStorage.getItem(
"lp_curso"
) || "";

mensaje.value =
localStorage.getItem(
"lp_mensaje"
) || "";

});

formulario.addEventListener(
"submit",
(e) => {

e.preventDefault();

mensajeExito.innerHTML =
"Gracias por registrarte 💖";

localStorage.clear();

formulario.reset();

});