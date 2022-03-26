import React, { useState } from 'react';

const Main = () => {

    const [ title, setTitle ] = useState("Hi I'm Cory!")

    return(
        <div className="jumbotron">
            <img src="media/Headshot2Copy.jpg" alt="A headshot of Cory!"/>
            <h1
                onMouseEnter={() => setTitle("And I Build Web Applications!")}
                onMouseLeave={() => setTitle("Hi I'm Cory!")}
            >{ title }</h1>
            <p>I'm a full stack web developer, a customer service expert, and a big ol' nerd.</p>
        </div>
    )
}

export default Main;