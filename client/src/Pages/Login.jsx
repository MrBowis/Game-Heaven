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
				<b className={styles.gofinance}>GoFinance</b>
				<div className={styles.theMostPopular}>
					The most popular peer to peer lending at SEA
				</div>
				<a href="/" className={styles.link}>Back</a>
			</div>
			<div className={styles.rightContent}>
				<b className={styles.gofinance}>Hello Again!</b>
				<div className={styles.welcomeBack}>Welcome Back</div>
				<form onSubmit={handleLogin}>
					<input
						type="user"
						placeholder="User Address"
						className={styles.input}
						value={user}
						onChange={(e) => setUser(e.target.value)}
					/>
					<input
						type="password"
						className={styles.input}
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit" className={styles.button}>
						Log In
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
