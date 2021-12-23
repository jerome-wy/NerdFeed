import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = (props) => {
	const [likePost, setLikePost] = useState(0);
	const [comment, setComment] = useState("");
	const [showComments, setShowComments] = useState(false);
	const [update, setUpdate] = useState(false);

	const likedPost = (post) => {
		setLikePost(likePost + 1);
	};

	console.log(props, "hello");

	// UPDATE POST -------------------------
	const modifyPost = (id) => {
		axios.put(`http://localhost:3001/posts/${id}`, {
			name: props.posts.name,
			title: props.posts.title,
			type: props.posts.type,
			image: props.posts.image,
			content: props.posts.content,
			likes: props.posts.likes,
		});
	};

	//onclick of Update button, conditional render a form

	//how do i pass the parameters here??

	// DELETE POST -------------------------
	const deletePost = async (id) => {
		const res = axios.delete(`http://localhost:3001/posts/${id}`);
		window.location.reload();
	};

	const clickComment = () => {};

	return (
		<div className="postsContainer">
			{props.posts.map((post) => (
				<div className="newPostContainer" key={post._id}>
					<img src={post.image} alt={post.title} className="newImagePost" />
					<br />

					<div className="postsName">
						<div className="modifyBtn_div">
							<button
								className="modifyBtns"
								id="modifyBtn"
								onClick={() => modifyPost}
							>
								✏️ Edit
							</button>
							{/* {update ? <ModifyPost /> : ''

							} */}
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
									onClick={likedPost}
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
			{/* 
			<div className="commentsContainer">
				<div className="commentName">Posted by: {comments.name}</div>

				<div className="commentContent">{comments.content}</div>

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
			</div> */}
		</div>
	);
};

export default Home;
