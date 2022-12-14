import React from 'react';
import Header from './components/Header';
import Content from './components/SecondOjtContent';
import Footer from './components/Footer';
import './App.css';

function App() {
    return(
        <div className='container'>
            <Header name="OJT Project 2"/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App;
