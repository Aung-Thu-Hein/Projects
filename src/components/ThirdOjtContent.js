/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
        width: 128,
      }}
    >
      {props.labelName}
    </label>
  )
}

const Button = props => {
  return (
    <button
      css={[
        {
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 15,
          paddingBottom: 15,
          borderWidth: 1,
          borderRadius: 8,
          fontSize: 18,
          fontWeight: 500,
          color: '#ffffff',
        },
        { backgroundColor: props.isDisabled ? '#a8326b' : '#6d1f44' },
      ]}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.buttonName}
    </button>
  )
}


const schema = Yup.object().shape({

  name: Yup
    .string()
    .required("Name is required"),

  email: Yup
    .string()
    .email("Invalid Email")
    .required("Email is required"),

  url: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
    )
    .required('Enter Url'),

  phoneNumber: Yup
    .string()
    .matches(/^\d+$/, 'Enter number only')
    .min(11, ({ min }) => `Invalid phone number`)
    .required("Phone number is required"),
})

const ThirdOjtContent = () => {

  const initialValues = {
    name: "",
    email: "",
    url: "",
    phoneNumber: "",
  }

  return (
    <div className="content">
      <Formik
        validationSchema={schema}
        onSubmit={(value) => console.log(value)}
        initialValues={initialValues}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldTouched,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form className="form" noValidate onSubmit={handleSubmit}>
            <Form.Group className="form-field">
              <Form.Label className="label">Name</Form.Label>
              <Stack>
                <Form.Control
                  className="input-field"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched('name')}
                  isValid={touched.name && !errors.name}
                />
                {
                  touched.name && errors.name && (
                    <Form.Control.Feedback type="invalid" className='error-text'>
                      {errors.name}
                    </Form.Control.Feedback>
                  )
                }
              </Stack>
            </Form.Group>
            <Form.Group className="form-field">
              <Form.Label className="label">Email</Form.Label>
              <Stack>
                <Form.Control
                  className="input-field"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched('email')}
                  isValid={touched.email && !errors.email}
                />
                {
                  touched.email && errors.email && (
                    <Form.Control.Feedback type="invalid" className='error-text'>
                      {errors.email}
                    </Form.Control.Feedback>
                  )
                }
              </Stack>
            </Form.Group>
            <Form.Group className="form-field">
              <Form.Label className="label">Url</Form.Label>
              <Stack>
                <Form.Control
                  className="input-field"
                  type="url"
                  name="url"
                  value={values.url}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched('url')}
                  isValid={touched.url && !errors.url}
                />
                {
                  touched.url && errors.url && (
                    <Form.Control.Feedback type="invalid" className='error-text'>
                      {errors.url}
                    </Form.Control.Feedback>
                  )
                }
              </Stack>
            </Form.Group>
            <Form.Group className='form-field'>
              <Label labelName="Phone Number" />
              <Stack>
                <input
                  css={inputText}
                  className="input-field"
                  type="text"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched('phoneNumber')}
                  isValid={touched.phoneNumber && !errors.phoneNumber}
                /><br />
                {
                  touched.phoneNumber && errors.phoneNumber && (
                    <span className='error-text'>
                      {errors.phoneNumber}
                    </span>
                  )
                }
              </Stack>
            </Form.Group>
            <Form.Group className="form-field button-field">
              <Button buttonName="Cancel" type="button" />
              <Button buttonName="Confirm" isDisabled={!isValid} type="submit" />
            </Form.Group>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ThirdOjtContent;
