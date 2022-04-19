import React from 'react';

const About = () => {
    return(
        <div className="about">
            <div className="about-text">
                <p>Hi I'm Cory Stine! I'm a full stack web developer from Baltimore, Maryland with a passionate devotion to curious exploration, creative problem solving and engaged communication. I love the feeling of diving head first into a subject that challenges my pre-existing notions and pushes my capabilities.</p> 
                <p>That is why I started my coding journey: to have fun building a few small games and to test my own skill set. But somewhere along the way, I fell in love with programming.</p>
                <p>Fast forward to two years later and I am a proud graduate of the software engineering program at Flatiron School. I followed my curiosity: learning Javascript, Ruby On Rails, React, Redux and so much more.</p> 
                <p>There is nothing quite like the endorphin rush I get when a new programming concept really sinks in or when a complex problem is solved with elegant design. Coding engages so many of my core values and interests. I am always looking for new ways to expand my toolset to become a stronger developer.</p> 
                <p>With my background in writing and customer service management, I bring a unique perspective to any team. I spent much of my previous career at Storyblocks working with the most challenging customer cases, providing me insight into the psychology of users, as well as common pain points to look out for before a new feature ships. It also taught me to treat every interaction with patience, consideration, and empathy.</p>
            </div>
            <div className="about-text">
                <h3>Education</h3>
                <div className="school">
                    <h4>Flatiron School</h4>
                    <h6>Graduated 2022</h6>
                    <p>Software Engineering</p>
                </div>
                <div className="school">
                    <h4>Towson University</h4>
                    <h6>Graduated 2011</h6>
                    <p>Bachelors of Science - Electronic Media and Film</p>
                </div>
            </div>
        </div>
    )
}

export default About;