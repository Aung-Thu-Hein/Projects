import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = () => {

    const navigate = useNavigate();
    const navigateToForm = () => navigate('/');

    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem("Form Data");
        const data = JSON.parse(saved);
        return data || "";
      });

    const [user, setUser] = useState([formData])

    return (
        <>
            <Table striped>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Date of Birth</th>
                    <th>User Role</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>001</td>
                    <td>Harry Potter</td>
                    <td>Male</td>
                    <td>harrypotter@gmail.com</td>
                    <td>London</td>
                    <td>1999</td>
                    <td>Guest</td>
                </tr>
            </tbody>
        </Table>
        <Button variant='primary' onClick={navigateToForm}>Register New User</Button>
        </>
        
    )
}

export default UserTable;