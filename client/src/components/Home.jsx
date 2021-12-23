import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = (props, { post, setPost }) => {
	// const likedPost = (id) => {
	// 	const res = axios.put(`http://localhost:3001/posts/${id}`, {
	// 		props.post.likes + 1
	// 	});
	// 	setPost(res.post.likes)
	// 	console.log(post.likes);
	// };

	// DELETE POST -------------------------
	const deletePost = async (id) => {
		let deletePrompt = prompt(
			"Are you sure you want to delete? (Yes or Hit Cancel to go back)"
		);
		if (deletePrompt === "Yes" || "yes" || "y" || "Y") {
			const res = axios.delete(`http://localhost:3001/posts/${id}`);
		} else if (deletePrompt !== "Yes" || "yes" || "y" || "Y") {
			return;
		}
	};

	// ------------------------------------

	return (
		<div className="postsContainer">
			{props.post.map((post) => (
				<div className="newPostContainer" key={post._id}>
					<img src={post.image} alt={post.title} className="newImagePost" />
					<br />

					<div className="postsName">
						<div className="modifyBtn_div">
							<button
								className="modifyBtns"
								id="modifyBtn"
								onClick={() => {
									props.history.push("/ModifyPost");
								}}
							>
								✏️ Edit
							</button>
						</div>

						<h2>{post.title}</h2>
						<p className="newPostParagraph">
							<b>Posted by:</b> {post.name}
							<br />
							<i>{post.type}</i>
							<div className="postsContent">{post.content}</div>
							<br />
							<br />
							<div className="buttonsDiv">
								<button
									className="postsBtn"
									id="likeBtn"
									type="submit"
									// onClick={() => likedPost}
								>
									Like
								</button>
								<button className="postsBtn" id="commentBtn">
									Comment
								</button>
								<button
									className="postsBtn"
									id="deleteBtn"
									onClick={() => deletePost(post._id)}
								>
									Delete
								</button>
								<br />
							</div>
						</p>
					</div>
				</div>
			))}

			{/* {props.comment.map((comment) => (
				<div className="commentsContainer">
					<div className="commentName">Posted by: {comment.name}</div>

					<div className="commentContent">{comment.content}</div>

					<div className="commentBtnsDiv">
						<button className="commentsBtn" id="likeBtn">
							Like
						</button>
						<button
							className="commentsBtn"
							id="commentBtn"
							// onClick={clickComment}
						>
							Comment
						</button>
					</div>
				</div>
			))} */}
		</div>
	);
};

export default Home;
