import "./login.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/token.js";
import { Navigate } from "react-router-dom";
import {
	selectToken,
	selectLoading,
	selectError,
} from "../../redux/selectors.js";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const token = useSelector(selectToken);
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		// Validation basique côté client
		if (!email || !password) {
			alert("Email and password are required.");
			return;
		}

		dispatch(login({ email, password }));
	};

	if (token) {
		return <Navigate to="/profil" />;
	}

	return (
		<main className="container">
			<div className="main bgDark">
				<section className="signInContent">
					<i className="fa fa-user-circle"></i>
					<h1 className="title">Sign In</h1>
					<form onSubmit={handleSubmit}>
						<div className="inputWrapper">
							<label className="bold" htmlFor="username">
								Username
							</label>
							<input
								type="text"
								id="username"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="inputWrapper">
							<label className="bold" htmlFor="password">
								Password
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="inputRemember">
							<input
								type="checkbox"
								id="remember-me"
								checked={rememberMe}
								onChange={(e) => setRememberMe(e.target.checked)}
							/>
							<label className="labelRemember" htmlFor="remember-me">
								Remember me
							</label>
						</div>
						<div className="error">{error}</div>
						<button type="submit" className="signInButton" disabled={loading}>
							{loading ? "Loading..." : "Sign In"}
						</button>
					</form>
				</section>
			</div>
		</main>
	);
};

export { Login };
console.log(`
		- First Name: Tony
		- Last Name: Stark
		- Email: tony@stark.com
		- Password: password123
		
		- First Name: Steve
		- Last Name: Rogers
		- Email: steve@rogers.com
		- Password: password456
	`);
