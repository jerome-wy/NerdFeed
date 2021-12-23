import React, { useState } from "react";
import axios from "axios";

const ModifyPost = (props) => {
	const {
		post,
		setPost,
		update,
		setUpdate,
		updated,
		setUpdated,
		index,
		setIndex,
	} = props;

	if (!updated) {
		for (let i = 0; i < props.post.length; i++) {
			if (props.match.params.id === `${props.post[i]._id}`) {
				setUpdate(props.post[i]);
				setIndex(i);
			}
		}
		setUpdated(true);
	}

	console.log(props);

	// // UPDATE POST -------------------------
	const handleSubmit = async (e) => {
		console.log(index, "before e prevent");
		e.preventDefault();
		const modifiedPost = {
			name: update.name,
			title: update.title,
			type: update.type,
			image: update.image,
			content: update.content,
		};
		const postArr = [...post];
		postArr[index] = modifiedPost;
		console.log(index);
		setPost(postArr);
		await axios.put(
			`http://localhost:3001/posts/${props.match.params.id}`,
			modifiedPost
		);
		setUpdated(false);
		props.history.push(`/Home`);
	};
	// ------------------------------------

	const handleChangeUpdatePost = (e) => {
		const { name, value } = e.target;
		let newPost = {
			...update,
			[name]: value,
		};
		setUpdate(newPost);
		console.log(update);
	};

	return (
		<div className="newPost_container">
			<form onSubmit={handleSubmit}>
				<img
					src="https://i.imgur.com/e8tznOC.png"
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
						value={update.name}
						onChange={handleChangeUpdatePost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Title:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Title of Post"
						name="title"
						value={update.title}
						onChange={handleChangeUpdatePost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Type:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Movie Review, Game Review, Question, etc ..."
						name="type"
						value={update.type}
						onChange={handleChangeUpdatePost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Image:</span>
					<input
						className="postForms"
						type="text"
						placeholder="Please paste in the image URL here ..."
						name="image"
						value={update.image}
						onChange={handleChangeUpdatePost}
					/>
				</div>

				<div className="newPostInput">
					<span className="newPostKey">Post:</span>
					<input
						className="postInput"
						type="text"
						placeholder="Write a post ..."
						name="content"
						value={update.content}
						onChange={handleChangeUpdatePost}
					/>
				</div>

				<div className="writePostBtns_container">
					<button className="writePostBtn" type="submit">
						Modify Post
					</button>
				</div>
			</form>
		</div>
	);
};

export default ModifyPost;
