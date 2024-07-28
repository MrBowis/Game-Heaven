import React, { useState } from "react";
import "../Styles/Login.css";

function Login(){
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		// Validar los datos de entrada
		if (!email || !password) {
			alert("Please fill in all fields");
			return;
		}

		// Aquí se puede añadir la lógica para enviar los datos al servidor
		console.log("Email:", email);
		console.log("Password:", password);

		// Limpiar los campos después del login
		setEmail("");
		setPassword("");

		// Navegar a otra página después del login (opcional)
		// history.push('/dashboard');
	};

	return (
		<div className="login">
			<div className="leftContent">
				<div className="bg" />
				<div className="content">
					<div className="groupParent">
						<div className="gofinanceParent">
							<b className="gofinance">GoFinance</b>
							<div className="theMostPopular">
								The most popular peer to peer lending at SEA
							</div>
						</div>
						<div className="readMoreWrapper">
							<div className="readMore">Read More</div>
						</div>
					</div>
				</div>
			</div>
			<div className="rightContent">
				<div className="title">
					<b className="gofinance">Hello Again!</b>
					<div className="welcomeBack">Welcome Back</div>
				</div>
				<form className="emailParent" onSubmit={handleLogin}>
					<div className="email">
						<div className="placeholder2">
							<input
								type="email"
								className="emailAddress"
								placeholder="Email Address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="password">
						<div className="placeholder1">
							<input
								type="password"
								className="emailAddress"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="button">
						<button type="submit" className="placeholder">
							<div className="gofinance">Login</div>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
