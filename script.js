//form --------------------------------------------------------------------------------

const submitForm = document.getElementById("form-submit");
const n = document.getElementById("name");
const subject = document.getElementById("subject");
const mail = document.getElementById("email");
const message = document.getElementById("message");

function errorHandler(value) {
	value.classList.remove("rm-error");
	value.classList.add("error");
}

const camposFormulario = document.querySelectorAll("[required]");

camposFormulario.forEach((campo) => {
	campo.addEventListener("blur", () => verificarCampor(campo));
	campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampor(campo) {
	if (campo.validity.valueMissing == false && campo.validity.typeMismatch == false) {
		campo.classList.remove("error");
		campo.classList.add("rm-error");
		console.log(campo.validity);
	} else {
		errorHandler(campo);
	}
}