import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = () => {

    const navigate = useNavigate();
    const navigateToForm = () => navigate('/');

    const [formData, setFormData] = useState([]); 
    useEffect(() => {
        const saved = localStorage.getItem("Form Data");
        const data = JSON.parse(saved);
        if(data){
            setFormData(data)
        }
    },[])

    // const [user, setUser] = useState([{...formData}])
    // console.log("user: ", user);

    return (
        <div>
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
                    {
                        formData.map((data, index) => {
                            console.log("data:: ", data);
                            return (
                                <tr key={index}>
                                    <td>{data.userId}</td>
                                    <td>{data.userName}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address}</td>
                                    <td>{data.birthday}</td>
                                    <td>{data.userRole}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Button variant='primary' onClick={navigateToForm}>Register New User</Button>
        </div>

    )
}

export default UserTable;