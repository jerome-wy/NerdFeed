import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import References from "./components/References";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Sidebar from "./components/Sidebar";
import NewPost from "./components/NewPost";
import NewComment from "./components/NewComment";
import PersonalFeed from "./components/PersonalFeed";
import ModifyPost from "./components/ModifyPost";
import Upcoming from "./components/Upcoming";
import axios from "axios";
import "./App.css";

function App() {
	// FOR NEW POSTS
	const [post, setPost] = useState({
		name: "",
		title: "",
		type: "",
		image: "",
		content: "",
		likes: 0,
	});

	// FOR NEW USERS SIGNING UP
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		confirm_password: "",
		github: "",
		website: "",
		avatar: "",
	});

	// FOR MODIFYING POSTS
	const [update, setUpdate] = useState({});

	const [updated, setUpdated] = useState(false);

	const [index, setIndex] = useState("");

	const [comment, setComment] = useState([]);

	// AXIOS CALLS TO GET ALL POSTS, COMMENTS, AND USERS
	const getPosts = async () => {
		const res = await axios.get("http://localhost:3001/posts");
		const postsResponse = res.data;

		setPost(postsResponse.posts);
	};

	const getComments = async () => {
		const res = await axios.get("http://localhost:3001/comments");
		const commentsResponse = res.data;

		setComment(commentsResponse.comments);
	};

	const getUsers = async () => {
		const res = await axios.get("http://localhost:3001/users");
		const usersResponse = res.data;

		setUser(usersResponse.users);
	};

	useEffect(() => {
		getPosts();
		getComments();
		getUsers();
	}, []);

	const duration = 500;

	const defaultStyle = {
		transition: `opacity ${duration}ms ease-in-out`,
		opacity: 0,
	};

	const transitionStyles = {
		entering: { opacity: 0.5 },
		entered: { opacity: 1 },
		existing: { opacity: 0.5 },
		exited: { opacity: 0 },
	};

	return (
		<div className="App">
			<Header />
			<Route
				exact
				path="/Home"
				component={(props) => (
					<Home {...props} comment={comment} post={post} setPost={setPost} />
				)}
			/>

			<Route exact path="/About" component={About} />

			<Route exact path="/References" component={References} />

			<Route exact path="/SignIn" component={SignIn} />
			<Route exact path="/SignUp" component={SignUp} />
			<Route exact path="/Upcoming" component={Upcoming} />
			<Route
				exact
				path="/PersonalFeed"
				render={(props) => (
					<PersonalFeed
						{...props}
						comments={comment}
						post={post}
						setPost={setPost}
						user={user}
					/>
				)}
			/>
			<Route exact path="/Sidebar" component={Sidebar} />
			<Route
				exact
				path="/NewComment"
				render={(props) => (
					<NewComment
						{...props}
						comments={comment}
						post={post}
						setPost={setPost}
					/>
				)}
			/>
			<Route
				exact
				path="/NewPost"
				render={(props) => (
					<NewPost
						{...props}
						comments={comment}
						post={post}
						setPost={setPost}
					/>
				)}
			/>
			<Route
				exact
				path="/ModifyPost/:id"
				render={(props) => (
					<ModifyPost
						{...props}
						comments={comment}
						post={post}
						setPost={setPost}
						update={update}
						setUpdate={setUpdate}
						updated={updated}
						setUpdated={setUpdated}
						index={index}
						setIndex={setIndex}
					/>
				)}
			/>
		</div>
	);
}

export default App;
