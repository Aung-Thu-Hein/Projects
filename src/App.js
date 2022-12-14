import React from 'react';
import Header from './components/Header';
import Content from './components/FirstOjtContent';
import Footer from './components/Footer';
import './App.css';

function App() {
    return(
        <div className='container'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App;
