import React from 'react';
import '../../src/App.css';

const Header = (props) => {
    return(
        <header className="header">
            <h1>Welcome from {props.name}</h1>
        </header>
    )
}

export default Header;
