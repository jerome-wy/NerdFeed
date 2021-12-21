import React, { useState, useReducer } from "react";

const SignUp = () => {
	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
		confirm_password: "",
		github: "",
		website: "",
	});

	// const handleChange = (e) => {};

	// const handleClick = (e) => {
	// 	e.preventDefault();
	// };

	return (
		<div className="newPost_container">
			<form>
				<img
					src="https://i.imgur.com/UVcHl0f.png"
					alt="Join the Dark Side!"
					width="500px"
				/>

				<div className="signInInput_Title">
					<span className="signInKey">User Name:</span>
					<input
						name="username"
						className="signInForms"
						type="text"
						// value={input.name}
						placeholder="Please enter a user name"
					/>
				</div>

				<div className="signInInput">
					<span className="signInKey">Email:</span>
					<input
						name="email"
						className="signInForms"
						type="text"
						// value={input.email}
						placeholder="Please enter an email address"
					/>
				</div>

				<div className="signInInput">
					<span className="signInKey">Password:</span>
					<input
						name="password"
						className="signInForms"
						type="text"
						// value={input.password}
						placeholder="Please enter a password"
					/>
				</div>

				<div className="signInInput">
					<span className="signInKey">Confirm Password:</span>
					<input
						name="confirmPassword"
						className="signInForms"
						type="text"
						// value={input.confirm_password}
						placeholder="Please confirm your password"
					/>
				</div>

				<div className="signInInput">
					<span className="signInKey">GitHub:</span>
					<input
						name="github"
						className="signInForms"
						type="text"
						// value={input.github}
						placeholder="GitHub URL"
					/>
				</div>

				<div className="signInInput">
					<span className="signInKey">Website:</span>
					<input
						name="website"
						className="signInForms"
						type="text"
						// value={input.website}
						placeholder="If you have a website/portfolio, enter the URL here!"
					/>
				</div>

				<div className="signUpBtn_container">
					<button className="writePostBtn">Create Account</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
