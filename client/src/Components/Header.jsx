import React from "react";
import styles from "../Styles/Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();

	const goToRegister = () => {
		navigate("/register");
	};

	const goToLogin = () => {
		navigate("login");
	};

	return (
		<>
			<div className={styles.buttonsActions}>
				<button className={styles.button} onClick={goToLogin}>Iniciar Sesión</button>
				<button className={styles.button} onClick={goToRegister}>Registrar</button>
			</div>
		</>
	);
}

export default Header;
