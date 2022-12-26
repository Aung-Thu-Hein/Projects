import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Formik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const schema = Yup.object().shape({

  userName: Yup
    .string()
    .required("User name is required"),

  gender: Yup
    .string()
    .required("Gender is required"),

  email: Yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  address: Yup
    .string()
    .required("Address is required"),

})

function FormComponent() {

  const [isDisable, setIsDisable] = useState(false);
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");

  const [userId, setUserId] = useLocalStorage("id", 1);

  const initialValues = {
    userName: "",
    gender: "",
    email: "",
    address: "",
  }


  const autoIncrease = (e) => {

    let count = e.target.value;
    count++;
    setUserId(count);
    console.log("count::: ", count);
  }

  const calculateAge = (e) => {

    setBirthday(e.target.value);
    var today = new Date();
    var birthDate = new Date(e.target.value);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m<0 || (m===0 && today.getDate() < birthDate.getDate())){
      age_now--;
    }
    console.log("Age Now ", age_now);
    setAge(JSON.stringify(age_now));
    console.log("Age", age);
  }

  const handleConfirm = () => {
    setIsDisable(true);
  }

  return (
    <div>
      <h1>Final Project</h1>
      <Container>
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={console.log}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                  <Col sm={2}><Form.Label>User ID</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Control
                      type="text"
                      name="userId"
                      value={userId}
                      onChange={autoIncrease}
                      disabled={isDisable}
                      readOnly />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                  <Col sm={2}><Form.Label>User Name</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Control
                      type="text"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                      disabled={isDisable}
                      isValid={touched.userName && !errors.userName}
                      isInvalid={!!errors.userName} />
                    <Form.Control.Feedback type="invalid">
                      {errors.userName}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                  <Col sm={2}><Form.Label>Gender</Form.Label></Col>
                  <Col sm={1}>
                    <Form.Check
                      name="gender"
                      label="Male"
                      type="radio"
                      value={values.gender}
                      onChange={handleChange}
                      disabled={isDisable}
                      isValid={touched.gender && !errors.gender}
                      isInvalid={!!errors.gender} />
                    <Form.Control.Feedback type="invalid" >
                      {errors.gender}
                    </Form.Control.Feedback>
                  </Col>
                  <Col sm={1}>
                    <Form.Check
                      name="gender"
                      label="Female"
                      type="radio"
                      value={values.gender}
                      onChange={handleChange}
                      disabled={isDisable}
                      isValid={touched.gender && !errors.gender}
                      isInvalid={!!errors.gender} />
                    <Form.Control.Feedback type="invalid">
                      {errors.gender}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                  <Col sm={2}><Form.Label>Email</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      disabled={isDisable}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email} />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                  <Col sm={2}><Form.Label>Address</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      disabled={isDisable}
                      isValid={touched.address && !errors.address}
                      isInvalid={!!errors.address} />
                    <Form.Control.Feedback type="invalid">
                      {errors.address}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                  <Col sm={2}><Form.Label>Date Of Birth</Form.Label></Col>
                  <Col sm={3} className='me-5'>
                    <Form.Control
                      type="date"
                      name="birthday"
                      value={birthday}
                      onChange={calculateAge}
                      disabled={isDisable} />
                  </Col>
                  <Col sm={2}><Form.Label>Age</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Control
                      type="text"
                      name="age"
                      value={age}
                      disabled={isDisable}
                      readOnly />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start mb-5'>
                  <Col sm={2}><Form.Label>User Role</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Select 
                      disabled={isDisable}>
                      <option></option>
                      <option value={values.userRole}>Administrator</option>
                      <option value={values.userRole}>User</option>
                      <option value={values.userRole}>Guest</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row className='justify-content-md-center'>
                  <Col sm={3}><Button variant="primary">{isDisable ? 'Back' : 'Clear'}</Button></Col>
                  <Col sm={3}>
                    <Button 
                      variant="primary" 
                      type="submit"
                      onClick={handleConfirm}>
                      {isDisable ? 'Register' : 'Confirm'}
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  )
}

export default FormComponent;
