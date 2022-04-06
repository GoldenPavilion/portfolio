import React from 'react';

const Projects = () => {
    
    return(
        <div className="projects">
            <div className="card">
                <h3 className="card-title">BoardGameShelf</h3>
                <p><a href="https://github.com/GoldenPavilion/react-redux-boardgames">Github</a> | <a href="https://www.youtube.com/watch?v=A637U6qeCj8">Video Demo</a></p>
                <p className="card-text">BoardGameShelf is an easy to use tool to help you organize your table top games. Simply sign up for an account, search through our database of games and click "Add To Shelf" when you've found a game you've owned. Pretty soon you'll have a personalized collection of games with details to help you pick which one would be best for your next game night!</p>
                <ul>
                    <li>Utilized MVC pattern to model custom database schema with Ruby on Rails / ActiveRecord.</li>
                    <li>Integrated backend API with JavaScript / React frontend using Redux middleware and thunk.</li>
                    <li>Implemented routing on single page application using React Router, allowing for browser navigation.</li>
                    <li>Leveraged Redux store to simplify and organize code into stateless components.</li>
                </ul>
            </div>
            <div className="card">
                <h3 className="card-title">FanMade</h3>
                <p><a href="https://github.com/GoldenPavilion/js_project_fanmade">Github</a> | <a href="https://www.youtube.com/watch?v=CnQky8X72a8">Video Demo</a></p>
                <p className="card-text">A JavaScript application that curates fanmade merchandise across a variety of sites and services - like Etsy, Teefury and Redbubble.</p>
                <ul>
                    <li>Designed Rails / ActiveRecord database using RESTful conventions to ensure efficiency and reusability.</li>
                    <li>Implemented serializers through fast JSON:API to share attributes between products, fandoms and categories.</li>
                    <li>Constructed Javascript frontend using an Object Oriented approach to encapsulate product data into classes.</li>
                    <li>Retrieved data from backend using asynchronous fetch calls.</li>
                </ul>
            </div>
            <div className="card">
                <h3 className="card-title">LoreScroll</h3>
                <p><a href="https://github.com/GoldenPavilion/LoreScroll">Github</a> | <a href="https://www.youtube.com/watch?v=l-ee5Js_-cU">Video Demo</a></p>
                <p className="card-text">A javascript application that curates fanmade merchandise across a variety of sites and services - like Etsy, Teefury and Redbubble.</p>
            </div>
        </div>
    )
}

export default Projects;