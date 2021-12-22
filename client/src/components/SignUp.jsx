import React, { useState, useReducer } from "react";
import axios from "axios";

const SignUp = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		confirm_password: "",
		github: "",
		website: "",
	});

	const createUser = (e) => {
		e.preventDefault();
		const newUser = {
			name: user.name,
			email: user.email,
			password: user.password,
			confirm_password: user.confirm_password,
			github: user.github,
			website: user.website,
		};
		axios.post("http://localhost:3001/users", newUser);
		console.log(newUser);
		window.location.reload();
	};

	const handleChangeNewUser = (e) => {
		const { name, value } = e.target;
		setUser((user) => {
			return {
				...user,
				[name]: value,
			};
		});
	};

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
						name="name"
						value={user.name}
						placeholder="Please enter a user name"
						onChange={handleChangeNewUser}
					/>
				</div>

				<div className="signInInput">
					<span className="signInKey">Email:</span>
					<input
						name="email"
						className="signInForms"
						type="text"
						name="email"
						value={user.email}
						placeholder="Please enter an email address"
						onChange={handleChangeNewUser}
					/>
				</div>

				<div className="signInInput">
					<span className="signInKey">Password:</span>
					<input
						name="password"
						className="signInForms"
						type="password"
						name="password"
						value={user.password}
						placeholder="Please enter a password"
						onChange={handleChangeNewUser}
					/>
				</div>

				<div className="signInInput">
					<span className="signInKey">Confirm Password:</span>
					<input
						name="confirmPassword"
						className="signInForms"
						type="password"
						name="confirm_password"
						value={user.confirm_password}
						placeholder="Please confirm your password"
						onChange={handleChangeNewUser}
					/>
				</div>

				<div className="signInInput">
					<span className="signInKey">GitHub:</span>
					<input
						name="github"
						className="signInForms"
						type="text"
						name="github"
						value={user.github}
						placeholder="GitHub URL"
						onChange={handleChangeNewUser}
					/>
				</div>

				<div className="signInInput">
					<span className="signInKey">Website:</span>
					<input
						name="website"
						className="signInForms"
						type="text"
						name="website"
						value={user.website}
						placeholder="If you have a website/portfolio, enter the URL here!"
						onChange={handleChangeNewUser}
					/>
				</div>

				<div className="signUpBtn_container">
					<button className="writePostBtn" type="submit" onClick={createUser}>
						Create Account
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
