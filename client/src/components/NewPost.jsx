import React, { useState } from "react";
import axios from "axios";

const NewPost = (props) => {
	const [newPost, setNewPost] = useState({});

	console.log(props.posts);

	const submitPost = (e) => {
		e.preventDefault();
		const newestPost = {
			name: newPost.name,
			title: newPost.title,
			type: newPost.type,
			image: newPost.image,
			content: newPost.content,
			likes: 0,
		};
		axios.post("http://localhost:3001/posts", newestPost);
		console.log(newestPost, "successfully posted!");
		// window.location.reload();
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
						value={props.posts.name}
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
						value={props.posts.title}
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
						value={props.posts.type}
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
						value={props.posts.image}
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
						value={props.posts.content}
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
