import React, { useState } from "react";
import "../Styles/Login.css";

function Login() {
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
		<div className="login">
			<div className="leftContent">
				<b className="gofinance">GoFinance</b>
				<div className="theMostPopular">
					The most popular peer to peer lending at SEA
				</div>
				<a className="readMore">
					Read More
				</a>
			</div>
			<div className="rightContent">
				<b className="gofinance">Hello Again!</b>
				<div className="welcomeBack">Welcome Back</div>
				<form className="userParent" onSubmit={handleLogin}>
					<input
						type="user"
						className="userAddress"
						placeholder="User Address"
						value={user}
						onChange={(e) => setUser(e.target.value)}
					/>
					<input
						type="password"
						className="userAddress"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit" className="button">
						Log In
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
