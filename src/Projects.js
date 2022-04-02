import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    
    return(
        <div className="projects">
            <div className="card">
                <h5 className="card-title"><Link to="https://github.com/GoldenPavilion/react-redux-boardgames">BoardGameShelf</Link></h5>
                <p className="card-text">BoardGameShelf is an easy to use tool to help you organize your table top games. Simply sign up for an account, search through our database of games and click "Add To Shelf" when you've found a game you've owned. Pretty soon you'll have a personalized collection of games with details to help you pick which one would be best for your next game night!</p>
            </div>
            <div className="card">
                <h5 className="card-title"><Link to="https://github.com/GoldenPavilion/js_project_fanmade">FanMade</Link></h5>
                <p className="card-text">A javascript application that curates fanmade merchandise across a variety of sites and services - like Etsy, Teefury and Redbubble.</p>
            </div>
            <div className="card">
                
            </div>
        </div>
    )
}

export default Projects;