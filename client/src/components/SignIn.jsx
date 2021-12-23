import React, { useState, useReducer } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PersonalFeed from "./PersonalFeed";

const SignIn = (props) => {
	// Add and initialize state for your form. Your state should include username, password, passwordConfirm, and valid properties.
	const iState = {
		username: "",
		password: "",
		displayedMessage: "",
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "username":
				return { ...state, username: action.payload };

			case "password":
				return { ...state, password: action.payload };

			case "displayedMessage":
				return {
					...state,
					displayedMessage: "You are now logged in and will be redirected.",
				};

			case "clear_message":
				return {
					...state,
					username: "",
					password: "",
					passwordConfirm: "",
					valid: false,
					displayedMessage: "",
				};

			default:
				return state;
		}
	};

	function validPassword() {
		dispatch({ type: "valid" });
	}

	const [state, dispatch] = useReducer(reducer, iState);

	const submitMessage = (e) => {
		e.preventDefault();
		dispatch({ type: "displayedMessage" });
	};

	const clearMessage = (e) => {
		// e.preventDefault();
		dispatch({ type: "clear_message" });
	};

	return (
		<div className="form">
			<div className="banner">
				<img
					src="https://i.imgur.com/QUPmgFY.png"
					alt="banner"
					className="signIn_Page"
				></img>
			</div>

			{/*Add a method for handling each input's onChange event.*/}

			<form onSubmit={submitMessage}>
				{/*USERNAME INPUT*/}
				<input
					className="inputForms"
					type="text"
					placeholder="Username"
					id="username"
					value={state.username}
					onChange={(e) =>
						dispatch({ type: "username", payload: e.target.value })
					}
				/>

				{/*PASSWORD INPUT*/}
				<input
					className="inputForms"
					type="password"
					placeholder="Password"
					id="password"
					value={state.password}
					onChange={(e) =>
						dispatch({
							type: "password",
							payload: e.target.value,
						})
					}
				/>

				{/*SUBMIT BUTTON & PW MUST MATCH MSG */}
				<Link to="/PersonalFeed">
					<button className="submit" type="submit">
						Sign In
					</button>
				</Link>
				<p>
					<b>{state.displayedMessage}</b>
				</p>
				<p className="forgotPassword">
					<Route
						exact
						path="/PersonalFeed"
						component={(props) => <PersonalFeed {...props} />}
					/>
					Not registered? Create an account!
					<br />
					Forgot password?
				</p>
			</form>
		</div>
	);
};

export default SignIn;
