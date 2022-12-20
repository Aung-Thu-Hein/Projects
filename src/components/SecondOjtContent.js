import React from "react";
import { useState } from "react";
import '../../src/App.css';

const SecondOjtContent = ({ moviesName }) => {

    const [title, setTitle] = useState("Welcome from Movies Lists...");

    return (
        <div className="secondcontent">
            <p className="content-text">{title}</p>
            <ul className="movies">
                {
                    moviesName.map((name, index) => {
                        return (
                            <li key={index}>{name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SecondOjtContent;
