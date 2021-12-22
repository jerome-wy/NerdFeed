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
				am a Full Stack Developer. This webapp is made from different
				technologies:
				<br />
				<ul>
					<li>
						<b>MongoDB</b>: Created a MongoDB cluster on Atlas
					</li>
					<li>
						<b>Express JS</b>: Web framework
					</li>
					<li>
						<b>React JS</b>: This webapp's frontend is completely built using
						React JS!
					</li>
					<li>
						<b>Node JS</b>: Web Server
					</li>
				</ul>
			</p>

			<p className="About_paragraph">
				My vision for NerdFeed is to create a community where people (especially
				us considered "nerds") to have a place to create conversations based on
				anything on their mind related but not limited to:
				<br />
				<ul>
					<li>
						Video Games, TV Shows, Movies, Comics, Programming:
						<ul>
							<li>Reviews, Gameplay Footage, Reaction Videos, eSports</li>
						</ul>
					</li>
				</ul>
			</p>
		</div>
	);
};

export default About;
