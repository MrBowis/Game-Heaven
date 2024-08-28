import React from "react";
import styles from "../Styles/Header.module.css";
import { isAuthenticated } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();

	const goToRegister = () => {
		navigate("/register");
	};

	const goToLogin = () => {
		navigate("/login");
	};

	const logout = () => {
		localStorage.removeItem("authToken");
		navigate("/");
	};

	if (isAuthenticated()) {
		return (
			<>
				<div className={styles.buttonsActions}>
					<button className={styles.button} onClick={() => navigate("/")}>Home</button>
					<button className={styles.button} onClick={() => navigate("/games")}>Juegos</button>
					{/* <button className={styles.button} onClick={() => navigate("/reviews")}>Mis Reseñas</button> */}
					<button className={styles.button} onClick={() => logout()}>Cerrar Sesión</button>
				</div>
			</>
		);
	}

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
