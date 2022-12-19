import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import '../App.css';

//components
import FirstOjtContent from '../components/FirstOjtContent';
import SecondOjtContent from '../components/SecondOjtContent';
import ThirdOjtContent from '../components/ThirdOjtContent';
import BookList from '../components/BookList';

const movies = [
    "Mone Swel",
    "ME",
    "Nga Duu",
    "Mystery of Burma",
    "Phoe Shate",
    "Mudras Calling",
    "Deception"
]

const Main = () => {
    return (
        <BrowserRouter>
            <div className="Main">
                <Navbar>
                    <Container>
                        <Nav className="nav-bar">
                            <NavLink to="/FirstOjtContent">
                                <Button className="button me-5" size="lg">FirstOjtContent</Button>
                            </NavLink>
                            <NavLink to="/secondOjtContent">
                                <Button className="button me-5" size="lg">SecondOjtContent</Button>
                            </NavLink>
                            <NavLink to="/thirdOjtContent">
                                <Button className="button me-5" size="lg">ThirdOjtContent</Button>
                            </NavLink>
                            <NavLink>
                                <Button to="/BookList" className="button me-5" size="lg">Book List</Button>
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route index ></Route>
                    <Route path='/FirstOjtContent' element={<FirstOjtContent />}></Route>
                    <Route path='/secondOjtContent' element={<SecondOjtContent />}></Route>
                    <Route path='/thirdOjtContent' element={<ThirdOjtContent />}></Route>
                    <Route path='/BookList' element={<BookList />}></Route>
                </Routes>
            </div>
            
        </BrowserRouter>
    )
}

export default Main;