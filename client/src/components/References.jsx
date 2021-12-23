import React from "react";

const References = () => {
	return (
		<div className="References_container">
			<div className="referenceName">
				<img
					src="https://i.imgur.com/9bxDnVS.png"
					className="referencesBanner"
					width="550px"
				/>
				<h2 className="referenceH2">GENERAL ASSEMBLY INSTRUCTORS</h2>
			</div>
			<div className="referenceContent">
				<div className="instructors">
					<img
						src="https://media-exp1.licdn.com/dms/image/C5603AQGj0e8NunloPw/profile-displayphoto-shrink_200_200/0/1633363549568?e=1645660800&v=beta&t=23CmRjMg6uQkhvTc7HnRU-vbD1XqxUB-nwR6e7KFvT4"
						className="instructorImages"
					/>
					<br />
					<b>Michael Lackey</b>
					<br />
					Sr. Associate Instructor
					<br />
				</div>
				<div className="instructors">
					<img
						src="https://media-exp1.licdn.com/dms/image/C5603AQH0b5LPKi6kCg/profile-displayphoto-shrink_200_200/0/1585230650056?e=1645660800&v=beta&t=A6EAJ3ru1mXqw3lWZ0jJA89ZMQo8DHrVxDtRUPmKhyk"
						className="instructorImages"
					/>
					<br />
					<b>Jeremy Taubman</b>
					<br />
					Lead Instructor
				</div>

				<div className="instructors">
					<img
						src="https://media-exp1.licdn.com/dms/image/C4E03AQEQ8Wkjnk4row/profile-displayphoto-shrink_200_200/0/1554074952312?e=1645660800&v=beta&t=6gR0jgDBliOuENOVfdG8XRhToBV8mAEPPiyJ_GZre_U"
						className="instructorImages"
					/>
					<br />
					<b>John Jacobs</b>
					<br />
					Associate Instructor
				</div>

				<div className="instructors">
					<img
						src="https://media-exp1.licdn.com/dms/image/C5603AQFWwmocMexivw/profile-displayphoto-shrink_200_200/0/1617982883328?e=1645660800&v=beta&t=IcXM3CpnLgNyIwHi6Lx6QYBRRUmftbgnaR7LnzI-GxA"
						className="instructorImages"
					/>
					<br />
					<b>Lindsay Moss</b>
					<br />
					Instructional Associate
				</div>
			</div>

			<div className="referenceName_websites">
				<h2 className="referenceH2">WEBSITES / VIDEOS</h2>
			</div>
			<div className="referenceContent_websites">
				<h3>CSS-TRICKS</h3>
				<br />
				<ul>
					<li>
						<a
							href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
							className="referenceLinks"
						>
							https://css-tricks.com/snippets/css/a-guide-to-flexbox/
						</a>
					</li>
					<li>
						<a
							href="https://css-tricks.com/snippets/css/complete-guide-grid/"
							className="referenceLinks"
						>
							https://css-tricks.com/snippets/css/complete-guide-grid/
						</a>
					</li>
				</ul>
			</div>
			<div className="referenceContent_websites">
				<h3>YOUTUBE VIDEO</h3>
				<br />
				<ul>
					<li>
						<a
							href="https://www.youtube.com/watch?v=nUbNn0voiBI&t=1807s"
							className="referenceLinks"
						>
							https://www.youtube.com/watch?v=nUbNn0voiBI&t=1807s
						</a>
					</li>
					<ul>
						<li>
							<i>
								This video was used to help me with the onChange and onSubmit
								functions
							</i>
						</li>
					</ul>
				</ul>
			</div>
		</div>
	);
};

export default References;
