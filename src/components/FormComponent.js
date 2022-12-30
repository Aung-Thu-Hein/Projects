import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Birthday from './Birthday';

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

})

function FormComponent() {

	const [birthday, setBirthday] = useState("");
	const [age, setAge] = useState("");
	const [isDisable, setIsDisable] = useState(false);
	const [form, setForm] = useState({})
	const [userData, setUserData] = useState({});
	const navigate = useNavigate();
	const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		let data = localStorage.getItem("Form Data");
		const userLength = Object.keys(userData).length;
		if (data) {
			data = JSON.parse(data);
      setValue('userId', 'ID-' + `${(data.length + 1).toString().padStart(4,'0')}`)
			if (userLength) {
				let newData = [...data, userData]
				localStorage.setItem("Form Data", JSON.stringify(newData));
			}
		}
		else {
			if (userLength) {
				localStorage.setItem("Form Data", JSON.stringify([userData]));
			}
			setValue('userId', 'ID-0001')
		}
		if (userLength) {
			navigate('/usertable')
		}
	}, [userData]);

	const onSubmit = data => {
		console.log(data);
		setIsDisable(true);
		const user = { age, birthday, ...data };
		setForm({ ...user })
	}

	return (
		<div>
			<h1>Final Project</h1>
			<Container>
				<Form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Form.Group className="mb-3">
						<Row className='justify-content-md-flex-start'>
							<Col sm={2}><Form.Label>User ID</Form.Label></Col>
							<Col sm={3}>
								<Form.Control
									type="text"
									{...register('userId')}
									disabled={isDisable}
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
									disabled={isDisable}
									isInvalid={errors?.userName?.message}
								/>
								<Form.Control.Feedback type="invalid">
									{errors?.userName?.message}
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
									disabled={isDisable}
									isInvalid={errors?.gender?.message}
								/>
								<Form.Control.Feedback type="invalid" >
									{errors?.gender?.message}
								</Form.Control.Feedback>
							</Col>
							<Col sm={1}>
								<Form.Check
									{...register('gender')}
									label="Female"
                  id="female"
									type="radio"
									value="Female"
									disabled={isDisable}
									isInvalid={errors?.gender?.message}
								/>
								<Form.Control.Feedback type="invalid">
									{errors?.gender?.message}
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
									disabled={isDisable}
									isInvalid={errors?.email?.message}
								/>
								<Form.Control.Feedback type="invalid">
									{errors?.email?.message}
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
									disabled={isDisable}
									isInvalid={errors?.address?.message}
								/>
								<Form.Control.Feedback type="invalid">
									{errors?.address?.message}
								</Form.Control.Feedback>
							</Col>
						</Row>
					</Form.Group>
					<Birthday
						birthday={birthday}
						changeBirth={(bday) => setBirthday(bday)}
						disabled={isDisable}
						age={age}
						changeAge={(calcAge) => setAge(calcAge)}
					/>
					<Form.Group className="mb-3">
						<Row className='justify-content-md-flex-start mb-5'>
							<Col sm={2}><Form.Label>User Role</Form.Label></Col>
							<Col sm={3}>
								<Form.Select
									{...register('userRole',)}
									disabled={isDisable}
									isInvalid={errors?.userRole?.message}>
									<option></option>
									<option value="Administrator">Administrator</option>
									<option value="User">User</option>
									<option value="Guest">Guest</option>
								</Form.Select>
								<Form.Control.Feedback type="invalid">
									{errors?.userRole?.message}
								</Form.Control.Feedback>
							</Col>
						</Row>
					</Form.Group>
					<Form.Group>
						<Row className='justify-content-md-center'>
							<Col sm={3}>
								{
									isDisable ?
										<Button variant="primary" onClick={() => setIsDisable(false)}>Back</Button>
										:
										<Button variant="primary" onClick={() => {
											setBirthday("")
											setAge("")
											reset()
										}
										}>Clear</Button>
								}
							</Col>
							<Col sm={3}>
								{
									isDisable ?
										<Button variant="primary" onClick={() => setUserData(form)} >Register</Button>
										:
										<Button variant="primary" type='submit'>Confirm</Button>
								}
							</Col>
						</Row>
					</Form.Group>
				</Form>
			</Container>
		</div>
	)
}

export default FormComponent;
