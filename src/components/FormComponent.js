import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Formik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const initialValues = {
    userName: "",
    gender: "",
    email: "",
    address: "",
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
                      value={values.userId}
                      isValid={touched.userId && !errors.userId} />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                  <Col sm={2}><Form.Label>User Name</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Control
                      required
                      type="text" 
                      name="userName" 
                      value={values.userName}
                      onChange={handleChange}
                      isValid={touched.userName && !errors.userName} /> 
                    <Form.Control.Feedback type="invalid" variant="danger">
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
                      isValid={touched.gender && !errors.gender} />
                  </Col>
                  <Col sm={1}>
                    <Form.Check 
                      name="gender" 
                      label="Female" 
                      type="radio" 
                      value={values.gender}
                      onChange={handleChange}
                      isValid={touched.gender && !errors.gender} />
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
                      isValid={touched.email && !errors.email} />
                  </Col>
                  <Form.Control.Feedback type="invalid" variant="danger">
                    {errors.email}
                  </Form.Control.Feedback>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                  <Col sm={2}><Form.Label>Address</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Control 
                      as="textarea" 
                      rows={4}
                      value={values.address}
                      onChange={handleChange}
                      isValid={touched.address && !errors.address} />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start'>
                  <Col sm={2}><Form.Label>Date Of Birth</Form.Label></Col>
                  <Col sm={3} className='me-5'>
                    <Form.Control 
                      type="text" 
                      name="birthday"
                      value={values.birthday}
                      onChange={handleChange}
                      isValid={touched.birthday && !errors.birthday}  />
                  </Col>
                  <Col sm={2}><Form.Label>Age</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Control 
                      type="text" 
                      name="age"
                      value={values.age}
                      isValid={touched.age && !errors.age}  />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className='justify-content-md-flex-start mb-5'>
                  <Col sm={2}><Form.Label>User Role</Form.Label></Col>
                  <Col sm={3}>
                    <Form.Select isValid={touched.userRole && !errors.userRole} >
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
                  <Col sm={3}><Button variant="primary">Clear</Button></Col>
                  <Col sm={3}><Button variant="primary" type="submit">Confirm</Button></Col>
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