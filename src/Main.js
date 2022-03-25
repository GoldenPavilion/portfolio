import React, { useState } from 'react';

const Main = () => {

    const [ title, setTitle ] = useState("Hi I'm Cory!")

    return(
        <div className="jumbotron">
            <h1
                onMouseEnter={() => setTitle("And I Build Web Applications!")}
                onMouseLeave={() => setTitle("Hi I'm Cory!")}
            >{ title }</h1>
        </div>
    )
}

export default Main;