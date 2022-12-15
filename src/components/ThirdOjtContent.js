/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import Form from 'react-bootstrap/Form';
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
            }}>
            {props.labelName}
        </label>
    )
}

const Button = props => {
    return (
        <button
            css={{
                backgroundColor: '#8a1747',
                paddingLeft: 50,
                paddingRight: 50,
                paddingTop: 15,
                paddingBottom: 15,
                borderWidth: 0,
                borderRadius: 4,
                fontSize: 18,
                fontWeight: 600,
            }}>
            {props.buttonName}
        </button>
    )
}

const Content = () => {
    return (
        <div className="content">
            <Form className="form">
                <Form.Group className="form-field">
                    <Form.Label className="label">Name</Form.Label>
                    <Form.Control type="text" className="input-field" />
                </Form.Group>
                <Form.Group className="form-field">
                    <Form.Label className="label">Email</Form.Label>
                    <Form.Control type="email" className="input-field" />
                </Form.Group>
                <Form.Group className="form-field">
                    <Form.Label className="label">Url</Form.Label>
                    <Form.Control type="url" className="input-field" />
                </Form.Group>
                <Form.Group className="form-field">
                    <Label labelName="Phone Number" className="label"></Label>
                    <input css={inputText} />
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
