import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useFormContext } from "react-hook-form";

const Birthday = (props: any) => {

  const { register, watch, setValue } = useFormContext();
  const bd = watch('birthday');

  const calculateAge = () => {

    var today = new Date();
    var birthDate = new Date(bd);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    let age = age_now ? age_now : "";
    setValue('age', age);
  }

  useEffect(() => {
    calculateAge();
  }, [bd]);

  return (
    <Container>
      <Form.Group className="mb-3">
        <Row className='justify-content-md-flex-start'>
          <Col sm={2}><Form.Label>Date Of Birth</Form.Label></Col>
          <Col sm={3} className='me-5'>
            <Form.Control
              type="date"
              {...register('birthday')}
              disabled={props.disabled} />
          </Col>
          <Col sm={2}><Form.Label>Age</Form.Label></Col>
          <Col sm={3}>
            <Form.Control
              type="text"
              {...register('age')}
              disabled={props.disabled}
              readOnly />
          </Col>
        </Row>
      </Form.Group>
    </Container>
  )
}

export default Birthday;
