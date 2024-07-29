import React, { useState } from "react";
import styles from "../Styles/Login.module.css";

const Login = () => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		// Validar los datos de entrada
		if (!user || !password) {
			alert("Please fill in all fields");
			return;
		}

		// Aquí se puede añadir la lógica para enviar los datos al servidor
		console.log("User:", user);
		console.log("Password:", password);

		// Limpiar los campos después del login
		setUser("");
		setPassword("");

		// Navegar a otra página después del login (opcional)
		// history.push('/dashboard');
	};

	return (
		<div className={styles.login}>
			<div className={styles.leftContent}>
				<b className={styles.gofinance}>Game Heaven</b>
				<div className={styles.theMostPopular}>
					Un lugar para que dejar volar tus opiniones
				</div>
				<a href="/" className={styles.link}>
					Home
				</a>
			</div>
			<div className={styles.rightContent}>
				<b className={styles.gofinance}>BIENVENIDO DE VUELTA!</b>
				<div className={styles.welcomeBack}>Inicia Sesión para divertirte</div>
				<form onSubmit={handleLogin}>
					<input
						type="user"
						placeholder="Usuario"
						className={styles.input}
						value={user}
						onChange={(e) => setUser(e.target.value)}
					/>
					<input
						type="password"
						className={styles.input}
						placeholder="Contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit" className={styles.button}>
						Log In
					</button>
				</form>
				<a href="/register" className={styles.message}>¿Aun sin cuenta? Registrate ahora</a>
			</div>
		</div>
	);
};

export default Login;
