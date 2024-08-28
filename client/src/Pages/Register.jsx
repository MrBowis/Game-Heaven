import React, { useState } from "react";
import styles from "../Styles/Register.module.css";
import axios from "axios";

function Register() {
	const [name, setName] = useState("");
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = (e) => {
		e.preventDefault();
		// Validar los datos de entrada
		if (!user || !email || !password || !name) {
			alert("Please fill in all fields");
			return;
		}

		// Crear un objeto con los datos del usuario
		const newUser = {
			id: Math.floor(Math.random() * 100000),
			name,
			user,
			email,
			password,
		};

		// Enviar los datos del usuario al servidor
		axios
			.post("http://localhost:4000/api/users", newUser)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.error(err);
			});

		// Limpiar los campos después del registro
		setName("");
		setUser("");
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
						placeholder="Nombre"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="text"
						className={styles.input}
						placeholder="Usuario"
						value={user}
						onChange={(e) => setUser(e.target.value)}
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
