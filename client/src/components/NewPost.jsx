import React, { useState } from "react";
import axios from "axios";

const NewPost = (props) => {
	const [newPost, setNewPost] = useState({});

	const submitPost = (e) => {
		e.preventDefault();
		const newestPost = {
			name: newPost.name,
			title: newPost.title,
			type: newPost.type,
			image: newPost.image,
			content: newPost.content,
		};
		axios.post("http://localhost:3001/posts", newestPost);
		props.history.push(`/Home`);
	};

	const handleChangeNewPost = (e) => {
		const { name, value } = e.target;
		setNewPost((newPost) => {
			return {
				...newPost,
				[name]: value,
			};
		});
	};

	return (
		<div className="newPost_container">
			<form>
				<img
					src="https://i.imgur.com/CFjickq.png"
					alt="Write a Post!"
					width="500px"
				/>

				<div className="newPostInput_Title">
					<span className="newPostKey">Name:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Enter your name here"
						name="name"
						value={newPost.name}
						onChange={handleChangeNewPost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Title:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Title of Post"
						name="title"
						value={newPost.title}
						onChange={handleChangeNewPost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Type:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Movie Review, Game Review, Question, etc ..."
						name="type"
						value={newPost.type}
						onChange={handleChangeNewPost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Image:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Please paste in the image URL here ..."
						name="image"
						value={newPost.image}
						onChange={handleChangeNewPost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Post:</span>
					<input
						className="postInput"
						type="text"
						placeholder="Write a post ..."
						name="content"
						value={newPost.content}
						onChange={handleChangeNewPost}
					/>
				</div>

				<div className="writePostBtns_container">
					<button className="writePostBtn" type="submit" onClick={submitPost}>
						Submit Post
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewPost;
