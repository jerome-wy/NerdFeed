import React, { useReducer, useState } from "react";
import axios from "axios";
import Home from "./Home";

const PersonalFeed = (props) => {
	const [avatar, setAvatar] = useState(true);
	console.log(props.user);

	const getAvatarPicture = async () => {
		await axios.get(`http://localhost:3001/users/${props.user._id}`);
	};

	return (
		<div className="PersonalFeed_container">
			<div className="avatarPicture_div">
				<img src={props.user[3].avatar} className="avatarPicture" />
			</div>
			<div className="userName_div">
				<div className="userName_div">
					<b>Username:</b>
				</div>
				<div className="userName_div">
					<b>Email:</b>
				</div>

				<div className="userName_div">
					<b>Github:</b>
				</div>

				<div className="userName_div">
					<b>Website:</b>
				</div>
			</div>
			<div className="userInfo_div">
				<div className="userInfo_div">{props.user[3].name}</div>

				<div className="userInfo_div">{props.user[3].email}</div>

				<div className="userInfo_div">{props.user[3].github}</div>

				<div className="userInfo_div">{props.user[3].website}</div>
			</div>
		</div>
	);
};

export default PersonalFeed;
