import React, { useState } from 'react';

const Main = () => {

    const [ title, setTitle ] = useState("Hello I'm Cory")

    return(
        <div className="jumbotron">
            <h1>{ title }</h1>
        </div>
    )
}

export default Main;