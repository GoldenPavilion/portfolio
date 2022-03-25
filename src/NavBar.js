import React from 'react';

const NavBar = () => {
    return(
        <div className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">    
                    <div className="navbar-brand">Robert Cory Stine</div>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <p className="nav-link">Resume</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Projects</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Skills</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Blog</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Github</p>
                        </li>
                        <li className="nav-item">
                           <p className="nav-link">LinkedIn</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;