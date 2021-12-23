import React from "react";

const Upcoming = () => {
	return (
		<div className="Upcoming_container">
			<img src="https://i.imgur.com/cqiqbaQ.png" />
			<div className="referenceName_websites">
				<h2>Like Button</h2>
				<div className="upcomingItem">
					<img
						src="https://i.imgur.com/qZurCio.png"
						className="upcomingImages"
					/>
					<br />
					The Like Button currently does not have the proper functionality to
					count the likes and store.
				</div>
				<h2>Comment Button</h2>
				<div className="upcomingItem">
					<img src="https://i.imgur.com/vD1W9TY.png" />
					<br />
					The Comment Button will eventually be associated to an onClick which
					will toggle the form to comment. The comment will then post within the
					post div.
				</div>

				<h2>User Authentication</h2>
				<div className="upcomingItem">
					<img src="https://i.imgur.com/XUm7Xs8.png" />
					<br />
					As of Dec. 22, 2021, we have not learned about Redux. This feature
					will be at the top of my list to add.
				</div>

				<h2>Code Cleanup & Restructure</h2>
				<div className="upcomingItem">
					There is a lot of places for improvement in my code base and will be
					going back to clean it up. I will also be working on getting the App
					to re-render automatically for certain state changes. Creating a NEW
					Post as well as DELETING a Post does not automatically re-render upon
					submission.
				</div>
			</div>
		</div>
	);
};

export default Upcoming;
