// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav, Navbar, Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import FirstOjtContent from './components/FirstOjtContent';
// import SecondOjtContent from './components/SecondOjtContent';
// import ThirdOjtContent from './components/ThirdOjtContent';
// import Main from './pages/Main';
// import './App.css';

// const movies = [
//     "Mone Swel",
//     "ME",
//     "Nga Duu",
//     "Mystery of Burma",
//     "Phoe Shate",
//     "Mudras Calling",
//     "Deception"
// ]

// function App() {
//     return(
//         <div className='container'>
//             <Header name="OJT Project 4"/>
//             <ThirdOjtContent/>
//             <Footer/>
//         </div>
//     )
// }

// function App() {
//     return(
//         <Main/>  
//     )
// }

// export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

//components
import FirstOjtContent from './components/FirstOjtContent';
import SecondOjtContent from './components/SecondOjtContent';
import ThirdOjtContent from './components/ThirdOjtContent';
import BookList from './components/BookList';

const movies = [
    "Mone Swel",
    "ME",
    "Nga Duu",
    "Mystery of Burma",
    "Phoe Shate",
    "Mudras Calling",
    "Deception"
]

const App = () => {
    return (
        <BrowserRouter>
            <div className="Main">
                <Navbar>
                    <Container>
                        <Nav className="nav-bar">
                            <NavLink to="/firstOjtContent">
                                <Button className="button me-5" size="lg">FirstOjtContent</Button>
                            </NavLink>
                            <NavLink to="/secondOjtContent">
                                <Button className="button me-5" size="lg">SecondOjtContent</Button>
                            </NavLink>
                            <NavLink to="/thirdOjtContent">
                                <Button className="button me-5" size="lg">ThirdOjtContent</Button>
                            </NavLink>
                            <NavLink to="/bookList">
                                <Button className="button me-5" size="lg">Book List</Button>
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route index ></Route>
                    <Route path='/firstOjtContent' element={<FirstOjtContent />}></Route>
                    <Route path='/secondOjtContent' element={<SecondOjtContent moviesName={movies} />}></Route>
                    <Route path='/thirdOjtContent' element={<ThirdOjtContent />}></Route>
                    <Route path='/bookList' element={<BookList />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
