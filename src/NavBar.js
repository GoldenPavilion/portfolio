import React from 'react';

const NavBar = () => {
    return(
        <div className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">    
                    <div className="navbar-brand">Robert Cory Stine</div>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Skills</a>
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