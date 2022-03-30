import React, { useState } from 'react';
import headshot from './media/Headshot2Copy.jpg';

const Main = () => {

    const [ title, setTitle ] = useState("Hi I'm Cory!")

    return(
        <div className="jumbotron">
            <img src={headshot} alt="A headshot of Cory!" width="200" height="280" />
            <h1
                onMouseEnter={() => setTitle("And I Build Web Applications!")}
                onMouseLeave={() => setTitle("Hi I'm Cory!")}
            >{ title }</h1>
            <p>I'm a full stack web developer, a customer service expert, and a big ol' nerd.</p>
        </div>
    )
}

export default Main;