import React from "react";
import { ExternalLink } from "react-external-link";

const About = () => {
	return (
		<div className="About_container">
			<div className="aboutPictureDiv">
				<img
					src="https://i.imgur.com/VcEi7IE.png"
					className="aboutBanner"
					width="550px"
				/>
				<br />
				<img
					src="https://media-exp1.licdn.com/dms/image/C4D03AQGTizQ-DzBoUA/profile-displayphoto-shrink_200_200/0/1638998388995?e=1645660800&v=beta&t=SuucKfNQgJyRw-Q-cV8An7Bxt0YX4ZQYVXrrRs0tCHc"
					className="aboutPicture"
				/>
				<br />
				<a href="https://github.com/jerome-wy/NerdFeed">
					<img
						src="https://i.imgur.com/H9qtgjT.png"
						alt="GitHub Respository for this Project"
						className="socialMediaIcons"
					/>
				</a>
				<a href="https://trello.com/b/QM02MyMf/nerdfeed">
					<img
						src="https://i.imgur.com/MHt9Tkk.png"
						alt="Trello"
						className="socialMediaIcons"
					/>
				</a>
				<a href="https://www.linkedin.com/in/jerome-wy">
					<img
						src="https://i.imgur.com/pTHbXWY.png"
						alt="LinkedIn"
						className="socialMediaIcons"
					/>
				</a>
			</div>

			<p className="IntroTechnologies_paragraph">
				Hello there! Thanks for stopping by! My name is <b>Jerome Wy</b> and I
				am a Full Stack Developer. NerdFeed was created for my very first{" "}
				<b>MERN</b> Full Stack Project. <br />
			</p>

			<div className="mernInfo_div">
				<div className="mernInfo">
					<center>
						<img src="https://i.imgur.com/BwmaV0x.png" />
						<b>MongoDB</b>
					</center>
					Set up the backend server database on MongoDB Atlas and managed the
					database information using MongoDB Compass & Mongosh.
				</div>

				<div className="mernInfo">
					<center>
						<img src="https://i.imgur.com/yKaYyZE.png" />
						<b>Express JS</b>
					</center>
					Express was used to take the requests from the front end application
					and send responses back.
				</div>

				<div className="mernInfo">
					<center>
						<img src="https://i.imgur.com/J9mH0oU.png" />
						<b>React JS</b>
					</center>
					This app's frontend is a React App. BrowserRouter, Route, and Redirect
					were a few features I used for this application. I also used useState
					and useEffect hooks.
				</div>

				<div className="mernInfo">
					<center>
						<img src="https://i.imgur.com/2iF2J0A.png" />
						<b>Node JS</b>
					</center>
					Node provided the realtime environment where I could run my backend
					server as well as the initial seed of posts, comments, and users.
				</div>
			</div>
			<p className="About_paragraph">
				NerdFeed is a home for all things nerd. Users are able to sign up and
				create a post (subject/title + content). Users are encouraged to post
				about anything nerdy (or non-nerdy). NerdFeed is a community where we
				share our likes/dislikes on video games, esports, movies, tv shows, and
				anything else!
				<br />
				<br />
				All you'll need to do is start the React App and the content will
				populate! Users are able to view posts without needing to create an
				account (User Authentication will be implemented in the near future!).
				All Posts will generate in the Home component as they get added using
				the New Post form.
				<br />
			</p>
		</div>
	);
};

export default About;
