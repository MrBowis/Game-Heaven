import React, { useState } from "react";
import styles from "../Styles/Register.module.css";

function Register() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = (e) => {
		e.preventDefault();
		// Validar los datos de entrada
		if (!fullName || !email || !password) {
			alert("Please fill in all fields");
			return;
		}

		// Aquí se puede añadir la lógica para enviar los datos al servidor
		console.log("Full Name:", fullName);
		console.log("Email:", email);
		console.log("Password:", password);

		// Limpiar los campos después del registro
		setFullName("");
		setEmail("");
		setPassword("");

		// Navegar a otra página después del registro (opcional)
		// history.push('/some-page');
	};

	return (
		<div className={styles.register}>
			<div className={styles.rightContent}>
				<b className={styles.gofinance}>BIENVENIDO!</b>
				<div className={styles.signUpTo}>Registrate para comenzar</div>
				<form onSubmit={handleRegister}>
					<input
						type="text"
						className={styles.input}
						placeholder="Nombres Completos"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
					/>

					<input
						type="email"
						className={styles.input}
						placeholder="Correo Electrónico"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="password"
						className={styles.input}
						placeholder="Contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type="submit" className={styles.button}>
						Registrar
					</button>
				</form>
				<a href="/login" className={styles.message}>¿Ya tienes cuenta? Inicia Sesión</a>
			</div>
			<div className={styles.leftContent}>
				<b className={styles.gofinance}>Game Heaven</b>
				<div className={styles.theMostPopular}>
					La pagina de reseñas favoritas para gamers
				</div>
				<a href="/" className={styles.link}>
					Home
				</a>
			</div>
		</div>
	);
}

export default Register;
