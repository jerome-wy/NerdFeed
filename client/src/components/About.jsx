import React from 'react'

const About = () => {

    

    return(
        <div className="About_container">
            <p className="IntroTechnologies_paragraph">
                Hello there! Thanks for stopping by! My name is Jerome Wy and I am a Full Stack Developer. This webapp is made from different technologies:<br />
                <ul>
                    <li><b>MongoDB</b>: Used as the backend database</li>
                    <li><b>Express JS</b>: Web framework</li>
                    <li><b>React JS</b>: The better version of Javascript for the frontend user/client experience</li>
                    <li><b>Node JS</b>: Web Server</li>
                
                </ul>
                </p>

            <p className="About_paragraph">
                My vision for NerdFeed is to create a community where people (especially us considered "nerds") to have a place to create conversations based on anything on their mind related but not limited to:<br />
                <ul>
                    <li>Video Games, TV Shows, Movies, Comics, Programming:
                        <ul>

                        <li>Reviews, Gameplay Footage, Reaction Videos, eSports</li>
                        </ul>        
                    </li>
                </ul>
            </p>
            
        </div>
    )
}

export default About