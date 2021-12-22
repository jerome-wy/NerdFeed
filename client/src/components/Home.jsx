import React, { useState } from "react";
import axios from "axios";

const Home = ({ posts, comments }) => {
	const [likePost, setLikePost] = useState(0);
	const [comment, setComment] = useState("");

	const likedPost = (post) => {
		setLikePost(likePost + 1);
	};

	console.log(posts);

	const updatePost = async (req, res) => {
		axios.put(`http://localhost:3001/posts/`);
	};
	//how do i pass the parameters here??
	const deletePost = async (req, res) => {
		axios.delete(`http://localhost:3001/posts/${req._id}}`);
	};

	const clickComment = () => {};

	return (
		<div className="postsContainer">
			{posts.map((post) => (
				<div className="newPostContainer" key={post._id}>
					<img src={post.image} alt={post.title} className="newImagePost" />

					<div className="postsName">
						<h2>{post.title}</h2>
						<p className="newPostParagraph">
							<b>Posted by:</b> {post.name}
							<br />
							<i>{post.type}</i>
							<div className="postsContent">{post.content}</div>
							<br />
							<br />
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
							<button className="postsBtn" id="deleteBtn" onClick={deletePost}>
								Delete
							</button>
							<br />
							<span className="likesTotal">
								{likePost > 1 ? `${likePost} likes` : `${likePost} like`}
							</span>
						</p>
					</div>
				</div>
			))}

			<div className="commentsContainer">
				<div className="commentName">Posted by: {comments.name}</div>
				<div className="commentContent">{comments.content}</div>

				<div className="commentBtnsDiv">
					<button className="commentsBtn" id="likeBtn">
						Like
					</button>
					<button className="commentsBtn" id="commentBtn">
						Comment
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
