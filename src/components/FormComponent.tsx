import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

// react bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

//userForm and yup
import * as Yup from 'yup';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//components
import Birthday from './Birthday';

type FormValues = {
  userId: string;
  userName: string;
  gender: string;
  email: string;
  address: string;
  birthday: Date;
  age: number;
  userRole: string;
}

const schema = Yup.object().shape({
  userName: Yup
    .string()
    .required("User name is required"),
  gender: Yup
    .string()
    .required("gender is required"),
  email: Yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  address: Yup
    .string()
    .required("Address is required"),
  userRole: Yup
    .string()
    .required("User role is required"),
}).required();

function FormComponent() {

  const methods = useForm<FormValues>({ resolver: yupResolver(schema), });
  const { register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors } } = methods

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = () => setIsDisabled(true);

  const handleRegister = () => {
    const formData: FormValues = getValues();

    let data: any[] = [];
    let newData: any[] = [];

    const dataString = localStorage.getItem('Form Data');
    if (dataString) {
      data = JSON.parse(dataString)
      newData = [...data, formData]
      localStorage.setItem("Form Data", JSON.stringify(newData));
    } else {
      localStorage.setItem("Form Data", JSON.stringify([formData]));
    }
    navigate('/usertable')
  }

  useEffect(() => {
    let data: any[] = [];
    const dataString: string | null = localStorage.getItem('Form Data');
    if (dataString) {
      data = JSON.parse(dataString);
      setValue('userId', 'ID-' + `${(data.length + 1).toString().padStart(4, '0')}`)
    } else setValue('userId', 'ID-0001')
  }, []);

  return (
    <div>
      <h1>Final Project</h1>
      <Container>
        <FormProvider {...methods} >
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Row className='justify-content-md-flex-start'>
                <Col sm={2}><Form.Label>User ID</Form.Label></Col>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    {...register('userId')}
                    disabled={isDisabled}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row className='justify-content-md-flex-start'>
                <Col sm={2}><Form.Label>User Name</Form.Label></Col>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    {...register('userName')}
                    isInvalid={!!errors.userName}
                    disabled={isDisabled}
                  />
                  <Form.Control.Feedback type="invalid" >
                    {errors.userName?.message}
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row className='justify-content-md-flex-start'>
                <Col sm={2}><Form.Label>Gender</Form.Label></Col>
                <Col sm={1}>
                  <Form.Check
                    {...register('gender')}
                    label="Male"
                    id="male"
                    type="radio"
                    value="Male"
                    isInvalid={!!errors.gender}
                    disabled={isDisabled}
                  />
                  <Form.Control.Feedback type="invalid" >
                    {errors.gender?.message}
                  </Form.Control.Feedback>
                </Col>
                <Col sm={1}>
                  <Form.Check
                    {...register('gender')}
                    label="Female"
                    id="female"
                    type="radio"
                    value="Female"
                    isInvalid={!!errors.gender}
                    disabled={isDisabled}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.gender?.message}
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
                    {...register('email')}
                    isInvalid={!!errors.email}
                    disabled={isDisabled}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
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
                    {...register('address')}
                    isInvalid={!!errors.address}
                    disabled={isDisabled}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address?.message}
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            <Birthday disabled={isDisabled} />
            <Form.Group className="mb-3">
              <Row className='justify-content-md-flex-start mb-5'>
                <Col sm={2}><Form.Label>User Role</Form.Label></Col>
                <Col sm={3}>
                  <Form.Select
                    {...register('userRole',)}
                    isInvalid={!!errors.userRole}
                    disabled={isDisabled}
                  >
                    <option></option>
                    <option value="Administrator">Administrator</option>
                    <option value="User">User</option>
                    <option value="Guest">Guest</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.userRole?.message}
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row className='justify-content-md-center'>
                <Col sm={3}>
                  {
                    isDisabled ?
                      <Button variant="primary" onClick={() => setIsDisabled(false)}>Back</Button>
                      :
                      <Button variant="primary" onClick={() => reset()}>Clear</Button>
                  }
                </Col>
                <Col sm={3}>
                  {
                    isDisabled ?
                      <Button variant="primary" onClick={handleRegister}>Register</Button>
                      :
                      <Button variant="primary" type='submit'>Confirm</Button>
                  }
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </FormProvider>
      </Container>
    </div>
  )
}

export default FormComponent;
