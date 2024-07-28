import React, { useState } from "react";
import  "../Styles/Register.css";

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
		<div className="register">
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
					<b className="gofinance">Hello!</b>
					<div className="signUpTo">Sign Up to Get Started</div>
				</div>
				<form className="emailParent" onSubmit={handleRegister}>
					<div className="email">
						<div className="placeholder">
							<input
								type="text"
								className="fullName"
								placeholder="Full Name"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							/>
						</div>
					</div>
					<div className="email">
						<div className="placeholder1">
							<input
								type="email"
								className="fullName"
								placeholder="Email Address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="email">
						<div className="placeholder2">
							<input
								type="password"
								className="fullName"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="button">
						<button type="submit" className="placeholder3">
							<div className="gofinance">Register</div>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;
