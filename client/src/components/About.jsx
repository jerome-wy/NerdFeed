import React from "react";
import { ExternalLink } from "react-external-link";

const About = () => {
	return (
		<div className="About_container">
			<div className="aboutPictureDiv">
				<img
					src="https://media-exp1.licdn.com/dms/image/C4D03AQGTizQ-DzBoUA/profile-displayphoto-shrink_200_200/0/1638998388995?e=1645660800&v=beta&t=SuucKfNQgJyRw-Q-cV8An7Bxt0YX4ZQYVXrrRs0tCHc"
					className="aboutPicture"
				/>
				<br />
			</div>

			<p className="IntroTechnologies_paragraph">
				<br />
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
