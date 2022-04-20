import React from 'react';

const Projects = () => {
    
    return(
        <div className="projects">
            <div className="card">
                <h3 className="card-title">BoardGameShelf</h3>
                <hr class="solid" />
                <p><a href="https://github.com/GoldenPavilion/react-redux-boardgames">Github</a> | <a href="https://www.youtube.com/watch?v=A637U6qeCj8">Video Demo</a></p>
                <p className="card-text">BoardGameShelf is an easy to use tool to help you organize your table top games. Simply sign up for an account, search through our database of games and click "Add To Shelf" when you've found a game you've owned. Pretty soon you'll have a personalized collection of games with details to help you pick which one would be best for your next game night!</p>
                <ul className="proj-list">
                    <li className="proj-list-item">Utilized MVC pattern to model custom database schema with Ruby on Rails / ActiveRecord.</li>
                    <li className="proj-list-item">Integrated backend API with JavaScript / React frontend using Redux middleware and thunk.</li>
                    <li className="proj-list-item">Implemented routing on single page application using React Router, allowing for browser navigation.</li>
                    <li className="proj-list-item">Leveraged Redux store to simplify and organize code into stateless components.</li>
                </ul>
            </div>
            <div className="card">
                <h3 className="card-title">FanMade</h3>
                <hr class="solid" />
                <p><a href="https://github.com/GoldenPavilion/js_project_fanmade">Github</a> | <a href="https://www.youtube.com/watch?v=CnQky8X72a8">Video Demo</a></p>
                <p className="card-text">A JavaScript application that curates fanmade merchandise across a variety of sites and services - like Etsy, Teefury and Redbubble.</p>
                <ul className="proj-list">
                    <li className="proj-list-item">Designed Rails / ActiveRecord database using RESTful conventions to ensure efficiency and reusability.</li>
                    <li className="proj-list-item">Implemented serializers through fast JSON:API to share attributes between products, fandoms and categories.</li>
                    <li className="proj-list-item">Constructed Javascript frontend using an Object Oriented approach to encapsulate product data into classes.</li>
                    <li className="proj-list-item">Retrieved data from backend using asynchronous fetch calls.</li>
                </ul>
            </div>
            <div className="card">
                <h3 className="card-title">LoreScroll</h3>
                <hr class="solid" />
                <p><a href="https://github.com/GoldenPavilion/LoreScroll">Github</a> | <a href="https://www.youtube.com/watch?v=l-ee5Js_-cU">Video Demo</a></p>
                <p className="card-text">An organizational tool for authors and storytellers to keep track of their characters, settings and stories.</p>
                <ul className="proj-list">
                    <li className="proj-list-item">Built out user authentication utilizing BCrypt for password encryption.</li> 
                    <li className="proj-list-item">Implemented OAuth functionality to allow for safe login with Google accounts.</li>
                    <li className="proj-list-item">Established validations for story, world and character models to prevent invalid data entry.</li>
                    <li className="proj-list-item">Utilized scope methods within models to define means of filtering objects alphabetically or by date added.</li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;