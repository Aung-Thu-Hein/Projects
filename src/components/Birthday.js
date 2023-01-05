import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCallback, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Birthday = (props) => {

    const calculateAge = useCallback(() => {
    	var today = new Date();
    	var birthDate = new Date(props.birthday);
    	var age_now = today.getFullYear() - birthDate.getFullYear();
    	var m = today.getMonth() - birthDate.getMonth();
    	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    		age_now--;
    	}
        let age = age_now ? (JSON.stringify(age_now)) :  "";
        props.changeAge(age)
    },[props.birthday, props.age])

    const handleChange = (e) => {
        props.changeBirth(e.target.value)
    }

    useEffect( () => {
        calculateAge();
    },[props.birthday]);
    
    return (
        <Container>
            <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                    <Col sm={2}><Form.Label>Date Of Birth</Form.Label></Col>
                    <Col sm={3} className='me-5'>
                        <Form.Control
                            type="date"
                            value={props.birthday}
                            onChange={handleChange}
                            disabled={props.disabled} />
                    </Col>
                    <Col sm={2}><Form.Label>Age</Form.Label></Col>
                    <Col sm={3}>
                        <Form.Control
                            type="text"
                            name="age"
                            value={props.age}
                            disabled={props.disabled}
                            readOnly />
                    </Col>
                </Row>
            </Form.Group>
        </Container>
    )
}

export default Birthday;
