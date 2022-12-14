import React from "react";
import { useState } from "react";
import '../../src/App.css';

const movies = [
    "Mone Swel",
    "ME",
    "Nga Duu",
    "Mystery of Burma",
    "Phoe Shate",
    "Mudras Calling",
    "Deception"
]

const Content = () => {

    const [title, setTitle] = useState("Welcome from Movies Lists...");
    const [moviesName, setMoviesName] = useState(movies);

    const Lists = moviesName.map( (name, index) => {
        return(
            <li key={index}>{name}</li>
        )
    })

    return (
        <div className="content">
            <p className="content-text">{title}</p>
            <ul>
                {Lists}
            </ul>
        </div>
    )
}

export default Content;
