/*------------------------------ INICIO SECCION CONTACTO----------------------------------------------------------- */
.contact-section {
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--White);
	scroll-margin-top: 15vh;
}

@media (max-width: 550px) {
	.contact-section {
		scroll-margin-top: 20px;
	}
}

.form-container {
	height: fit-content;
	width: 65%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: var(--White);
	padding: 10px 0px;
}

.form-title {
	font-size: 28px;
	font-weight: 700;
	color: var(--Black);
	margin: 15px 0px;
}

.form-aclaracion {
	font-size: 12px;
	font-weight: 400;
	color: gray;
}

.campos-container {
	height: 100%;
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 20px;
}

.campo-container {
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.campo-container > input {
	height: 40px;
	width: 100%;
	border-radius: 50px;
	padding: 15px;
}

.campo-container > textarea {
	height: 120px;
	width: 100%;
	border-radius: 15px;
	padding: 15px;
}

.campo-container > select {
	height: 40px;
	width: 150px;
	border-radius: 50px;
	padding: 5px 15px;
}

.campo-container > label {
	font-size: 16px;
	font-weight: 500;
}

.campo-container-p {
	font-size: 16px;
	font-weight: 500;
}

.campo-container > input:focus,
.campo-container > input:active,
.campo-container > input:visited,
.campo-container > input:focus,
.campo-container > textarea:focus,
.campo-container > select:focus {
	background-color: var(--White);
	outline: none;
}

.campo-container-integrantes {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.form-asterisk {
	color: var(--Orange);
}

.form-icon {
	height: 20px;
	width: 20px;
}

.error {
	background-color: var(--White);
	border: solid 4px var(--Orange);
}

.rm-error {
	background-color: var(--White);
	border: solid 4px var(--Blue);
}

.mensaje-error {
	font-size: 12px;
	font-weight: 400;
	color: var(--Orange);
}

.aceptacion-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.check-mensaje {
	display: flex;
	align-items: center;
}

.aceptacion {
	height: 20px;
	width: 20px;
	margin: 0px 5px;
}

.form-submit {
	height: 40px;
	width: 150px;
	font-size: 16px;
	font-weight: 600;
	padding: 10px 20px;
	border-radius: 50px;
	border: none;
	background-color: var(--Blue);
	margin-left: auto;
	margin-right: auto;
}

.form-submit:hover {
	background-color: #14213dc9;
}

.form-submit,
.form-submit:focus,
.form-submit:hover,
.form-submit:active,
.form-submit:visited {
	text-decoration: none;
	color: var(--White);
}

/*---MOBILE SCREEN (Small size)---*/
@media screen and (max-width: 430px) {
	.form-container {
		width: 85%;
	}

	.form-title {
		font-size: 18px;
		font-weight: 600;
		margin: 10px 0px;
	}

	.form-aclaracion {
		font-size: 10px;
		margin-bottom: 5px;
	}

	.campos-container {
		width: 100%;
		gap: 12px;
	}

	.campo-container > label {
		font-size: 12px;
		font-weight: 400;
	}

	.campo-container > input {
		height: 30px;
		font-size: 12px;
		font-weight: 400;
	}

	.campo-container > textarea {
		height: 60px;
		font-size: 12px;
		font-weight: 400;
	}

	.campo-container > select {
		height: 35px;
		font-size: 12px;
		font-weight: 400;
	}

	.campo-container-p {
		font-size: 12px;
		font-weight: 400;
	}

	.form-icon {
		height: 16px;
		width: 16px;
	}

	.mensaje-error {
		font-size: 10px;
	}

	.error {
		border: solid 2px var(--Orange);
	}

	.rm-error {
		border: solid 2px var(--Blue);
	}

	.aceptacion-container > label {
		font-size: 12px;
		font-weight: 400;
		margin-bottom: 5px;
	}

	.aceptacion {
		height: 16px;
		width: 16px;
		margin: 0px 3px;
	}

	.form-submit {
		height: 30px;
		width: 100px;
		font-size: 12px;
		padding: 5px 10px;
	}
}

/*---TABLET SCREEN (Medium size)---*/
@media screen and (min-width: 430px) and (max-width: 730px) {
	.form-container {
		width: 65%;
	}

	.form-title {
		font-size: 20px;
		margin: 12px 0px;
	}

	.form-aclaracion {
		font-size: 12px;
		margin-bottom: 3px;
	}

	.campos-container {
		width: 100%;
		gap: 15px;
	}

	.campo-container > label {
		font-size: 14px;
		font-weight: 400;
	}

	.campo-container > input {
		height: 35px;
		font-size: 14px;
		font-weight: 400;
	}

	.campo-container > textarea {
		height: 70px;
		font-size: 14px;
		font-weight: 400;
	}

	.campo-container > select {
		height: 35px;
		font-size: 14px;
		font-weight: 400;
	}

	.campo-container-p {
		font-size: 14px;
		font-weight: 400;
	}

	.form-icon {
		height: 16px;
		width: 16px;
	}

	.mensaje-error {
		font-size: 11px;
	}

	.error {
		border: solid 3px var(--Orange);
	}

	.rm-error {
		border: solid 3px var(--Blue);
	}

	.aceptacion-container > label {
		font-size: 14px;
		font-weight: 400;
		margin-bottom: 5px;
	}

	.aceptacion {
		height: 17px;
		width: 17px;
		margin: 0px 3px;
	}

	.form-submit {
		height: 35px;
		width: 100px;
		font-size: 14px;
		padding: 5px 10px;
	}
}

/*---LAPTOP SCREEN---*/
@media screen and (min-width: 730px) and (max-width: 930px) {
	.form-container {
		width: 60%;
	}

	.form-title {
		font-size: 20px;
		margin: 15px 0px;
	}

	.form-aclaracion {
		font-size: 12px;
		margin-bottom: 5px;
	}

	.campos-container {
		width: 100%;
		gap: 15px;
	}

	.campo-container > label {
		font-size: 16px;
		font-weight: 500;
	}

	.campo-container > input {
		height: 40px;
		font-size: 16px;
		font-weight: 500;
	}

	.campo-container > textarea {
		height: 80px;
		font-size: 16px;
		font-weight: 500;
	}

	.campo-container > select {
		height: 40px;
		font-size: 16px;
		font-weight: 500;
	}

	.campo-container-p {
		font-size: 16px;
		font-weight: 500;
	}

	.form-icon {
		height: 18px;
		width: 18px;
	}

	.mensaje-error {
		font-size: 12px;
	}

	.error {
		border: solid 4px var(--Orange);
	}

	.rm-error {
		border: solid 4px var(--Blue);
	}

	.aceptacion-container > label {
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 8px;
	}

	.aceptacion {
		height: 18px;
		width: 18px;
		margin: 0px 5px;
	}

	.form-submit {
		height: 40px;
		width: 120px;
		font-size: 16px;
		padding: 5px 10px;
	}
}