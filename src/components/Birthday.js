import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Birthday = (props) => {

    const [birthday, setBirthday] = useState("");
	const [age, setAge] = useState("");
    const [isDisable, setIsDisable] = useState(false);
    const [birth, setBirth] = useState({birthday: "", age: ""});

    const calculateAge = (b) => {

		// setBirthday(e.target.value);
		var today = new Date();
		var birthDate = new Date(b);
		var age_now = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age_now--;
		}
		// console.log("Age Now ", age_now);
		setAge(JSON.stringify(age_now));
		// console.log("Age", age);
        setBirth({[birthday]: b, [age]:age_now});
	}

    return (
        <Container>
            <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                    <Col sm={2}><Form.Label>Date Of Birth</Form.Label></Col>
                    <Col sm={3} className='me-5'>
                        <Form.Control
                            type="date"
                            name="birthday"
                            value={birthday}
                            onChange={() => calculateAge(birthday)}
                            disabled={props.isDisable} />
                    </Col>
                    <Col sm={2}><Form.Label>Age</Form.Label></Col>
                    <Col sm={3}>
                        <Form.Control
                            type="text"
                            name="age"
                            value={age}
                            disabled={props.isDisable}
                            readOnly />
                    </Col>
                </Row>
            </Form.Group>
        </Container>
    )
}

export default Birthday;
