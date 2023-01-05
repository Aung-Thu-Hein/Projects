import { Routes, Route, } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import UserTable from './components/UserTable';

function App() {
  return (
    <Routes>
        <Route path='/' element={<FormComponent/>} />
        <Route path='usertable' element={ <UserTable/>} />
    </Routes>
  )
}

export default App;
