import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">    
                    <div className="navbar-brand">
                        <Link to="/">Robert Cory Stine</Link>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/work" className="nav-link">Work History</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className="nav-link">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://rcorystine.medium.com/" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.github.com/GoldenPavilion" className="nav-link">Github</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/robert-cory-stine/" className="nav-link">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;