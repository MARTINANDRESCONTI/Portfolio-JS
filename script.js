//form --------------------------------------------------------------------------------

const submitForm = document.getElementById("form-submit");
const n = document.getElementById("name");
const subject = document.getElementById("subject");
const mail = document.getElementById("email");
const message = document.getElementById("message");

function errorHandler(value) {
	// value.nextElementSibling.textContent = "Fill out the field...";
	value.classList.remove("rm-error");
	value.classList.add("error");
}

// submit function to fill with backend !!!!

// submitForm.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	console.log("I am here");
// 	n.value = "";
// 	errorHandler(n);
// 	subject.value = "";
// 	errorHandler(subject);	
// 	mail.value = "";
// 	errorHandler(mail);
// 	message.value = "";
// 	errorHandler(message);
// 	event.submitForm()
// });

const camposFormulario = document.querySelectorAll("[required]");

camposFormulario.forEach((campo) => {
	campo.addEventListener("blur", () => verificarCampor(campo));
	campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampor(campo) {
	if (campo.validity.valueMissing == false && campo.validity.typeMismatch == false) {
		// const errorMenssage = campo.nextElementSibling;
		// errorMenssage.textContent = "";
		campo.classList.remove("error");
		campo.classList.add("rm-error");
		console.log(campo.validity);
	} else {
		errorHandler(campo);
	}
}