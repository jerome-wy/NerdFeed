import React, { useState } from "react";

const Home = ({ posts, comments }) => {
	const [likePost, setLikePost] = useState(0);
	const [comment, setComment] = useState("");

	const likedPost = (posts) => {
		setLikePost(likePost + 1);
	};

	console.log(posts);

	return (
		<div className="postsContainer">
			{posts.map((post) => (
				<div className="newPostContainer">
					<img
						src={post.post_image}
						alt={post.title}
						className="newImagePost"
					/>

					<p className="newPostParagraph">
						<h2>{post.post_title}</h2>

						<div className="postsName">
							<b>Posted by:</b> {post.post_name}
							<br />
							<i>{post.post_type}</i>
						</div>

						<div className="postsContent">{post.post_content}</div>

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
						<button className="postsBtn" id="deleteBtn">
							Delete
						</button>
						<br />
						<span className="likesTotal">
							{likePost > 1 ? `${likePost} likes` : `${likePost} like`}
						</span>
					</p>
				</div>
			))}

			{/* <div className="commentsContainer">
				<div className="commentName">Posted by: {comments.comment_name}</div>
				<div className="commentContent">{comments.comment_content}</div>

				<div className="commentBtnsDiv">
					<button className="commentsBtn" id="likeBtn">
						Like
					</button>
					<button className="commentsBtn" id="commentBtn">
						Comment
					</button>
				</div>
			</div> */}
		</div>
	);
};

export default Home;
