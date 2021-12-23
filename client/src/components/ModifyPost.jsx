import React, { useState } from "react";
import axios from "axios";

const ModifyPost = (props) => {
	const [update, setUpdate] = useState({
		name: "",
		title: "",
		type: "",
		image: "",
		content: "",
	});

	console.log(update);

	// UPDATE POST -------------------------
	const modifyPost = async (e) => {
		console.log("modify");
		e.preventDefault();
		await axios.put(`http://localhost:3001/posts/${props.posts._id}`, {
			name: update.name,
			title: update.title,
			type: update.type,
			image: update.image,
			content: update.content,
			likes: 0,
		});
	};
	// ------------------------------------

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
						// onChange={handleChangeNewPost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Title:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Title of Post"
						name="title"
						// value={post.title}
						// onChange={handleChangeNewPost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Type:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Movie Review, Game Review, Question, etc ..."
						name="type"
						// value={post.type}
						// onChange={handleChangeNewPost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Image:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Please paste in the image URL here ..."
						name="image"
						// value={post.image}
						// onChange={handleChangeNewPost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Post:</span>
					<input
						className="postInput"
						type="text"
						placeholder="Write a post ..."
						name="content"
						// value={post.content}
						// onChange={handleChangeNewPost}
					/>
				</div>

				<div className="writePostBtns_container">
					<button className="writePostBtn" type="submit" onClick={modifyPost}>
						Modify Post
					</button>
				</div>
			</form>
		</div>
	);
};

export default ModifyPost;
