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
                                <Button className="button" >FirstOjtContent</Button>
                            </NavLink>
                            <NavLink to="/secondOjtContent">
                                <Button className="button" >SecondOjtContent</Button>
                            </NavLink>
                            <NavLink to="/thirdOjtContent">
                                <Button className="button" >ThirdOjtContent</Button>
                            </NavLink>
                            <NavLink to="/bookList">
                                <Button className="button" >Book List</Button>
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
