import React from 'react';
import Header from './components/Header';
import Content from './components/SecondOjtContent';
import Footer from './components/Footer';
import './App.css';

const movies = [
    "Mone Swel",
    "ME",
    "Nga Duu",
    "Mystery of Burma",
    "Phoe Shate",
    "Mudras Calling",
    "Deception"
]

function App() {
    return(
        <div className='container'>
            <Header name="OJT Project 2"/>
            <Content moviesName={movies}/>
            <Footer/>
        </div>
    )
}

export default App;
