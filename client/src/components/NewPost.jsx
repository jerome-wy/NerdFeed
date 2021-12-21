import React, { useState } from "react";
import axios from "axios";

const NewPost = (props) => {
	const [post, setPost] = useState({
		name: "",
		title: "",
		type: "",
		image: "",
		content: "",
		likes: 0,
	});

	const commentClick = () => {};

	const submitPost = (e) => {
		e.preventDefault();
		const newPost = {
			name: post.name,
			title: post.title,
			type: post.type,
			image: post.image,
			content: post.content,
			likes: post.likes,
		};
		axios.post("http://localhost:3001/posts", { newPost });
		setPost(newPost);
	};

	return (
		<div className="newPost_container">
			<form onSubmit={submitPost}>
				<img
					src="https://i.imgur.com/CFjickq.png"
					alt="Write a Post!"
					width="500px"
				/>

				<div className="newPostInput_Title">
					<span className="newPostKey">Title:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Title of Post"
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Type:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Movie Review, Game Review, Question, etc ..."
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Image:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Please paste in the image URL here ..."
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Post:</span>
					<input
						className="postInput"
						type="text"
						placeholder="Write a post ..."
					/>
				</div>

				<div className="writePostBtns_container">
					<button className="writePostBtn">Submit Post</button>
				</div>
			</form>
		</div>
	);
};

export default NewPost;
