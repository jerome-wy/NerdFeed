import React, { useState, useReducer } from "react";

const SignIn = (props) => {
	// Add and initialize state for your form. Your state should include username, password, passwordConfirm, and valid properties.
	const iState = {
		username: "",
		password: "",
		passwordConfirm: "",
		valid: false,
		displayedMessage: "",
		passwordLength: false,
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "username":
				return { ...state, username: action.payload };

			case "password":
				return { ...state, password: action.payload };

			case "passwordConfirm":
				return { ...state, passwordConfirm: action.payload };

			// case 'password_length':
			//   return password.value.length > 7
			//     ? {
			//         ...state,
			//         passwordLength: true,
			//         displayedMessage: 'Password meets requirements.'
			//       }
			//     : {
			//         ...state,
			//         passwordLength: false,
			//         type: 'valid',
			//         displayedMessage: 'Password must be 7 characters'
			//       };

			//   case 'valid':
			//     return password.value === passwordConfirm.value
			//       ? {
			//           ...state,
			//           valid: true,
			//           displayedMessage: 'You are signed in.'
			//         }
			//       : {
			//           ...state,
			//           valid: false,
			//           displayedMessage: 'Your passwords do not match.'
			//         };

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

	// function validPassword() {
	//   dispatch({ type: 'valid' });
	// }

	const [state, dispatch] = useReducer(reducer, iState);

	const submitMessage = (e) => {
		e.preventDefault();
		dispatch({ type: "valid" });
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
				<button className="submit" type="submit">
					Sign In
				</button>
				<p>{state.displayedMessage}</p>

				<p className="forgotPassword">Forgot password?</p>
			</form>
		</div>
	);
};

export default SignIn;
