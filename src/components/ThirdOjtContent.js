/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import '../../src/App.css';

const inputText = css({
    padding: 7,
    width: 250,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: 'black',
})

const Label = props => {
    return (
        <label
            css={{
                fontSize: 18,
                fontWeight: 600,
                color: 'black',
            }}
        >
            {props.labelName}
        </label>
    )
}

const Button = props => {
    return (
        <button
            css={{
                paddingLeft: 50,
                paddingRight: 50,
                paddingTop: 15,
                paddingBottom: 15,
                borderWidth: 0,
                borderRadius: 8,
                fontSize: 18,
                fontWeight: 600,
                backgroundColor: '#8a1747',
                color: '#fff'
            }}>
            {props.buttonName}
        </button>
    )
}

const Content = () => {

    const initialValues = {
        name: "",
        email: "",
        url: "",
        phNumber: "",
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const error = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        const regexNumber = /^\d+$/;

        if (!values.name) {
            error.name = "Name is required";
        }

        if (!values.email) {
            error.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            error.email = "Invalid email format";
        }

        if (!values.url) {
            error.url = "Url is required";
        } else if (!regexUrl.test(values.url)) {
            error.url = "Invalid url format";
        }

        if (!values.phNumber) {
            error.phNumber = "Phone number is required";
        } else if (!regexNumber.test(values.phNumber)) {
            error.phNumber = "Invalid number format";
        }

        return error;
    }


    return (
        <div className="content">
            <Form className="form" onSubmit={handleSubmit}>
                <Form.Group className="form-field">
                    <Form.Label className="label">Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        className="input-field"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formErrors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-field">
                    <Form.Label className="label">Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        className="input-field"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formErrors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-field">
                    <Form.Label className="label">Url</Form.Label>
                    <Form.Control
                        type="url"
                        name="url"
                        className="input-field"
                        value={formValues.url}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formErrors.url}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-field">
                    <Label labelName="Phone Number" className="label" />
                    <input
                        type="text"
                        name="phNumber"
                        css={inputText}
                        value={formValues.phNumber}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formErrors.phNumber}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-field button-field">
                    <Button buttonName="Cancle" />
                    <Button buttonName="Confirm" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Content;
