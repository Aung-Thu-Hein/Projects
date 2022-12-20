import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from "react";

const books = [
    {
        bookName: 'Smooth of Love',
        price: 2000,
        author: 'Su Myat Mon Mon',
        date: '1/8/2019',
    },
    {
        bookName: 'My Serious Love',
        price: 1500,
        author: 'Yar Za Koe',
        date: '',
    },
    {
        bookName: 'Smooth of Love',
        price: 2000,
        author: 'Su Myat Mon Mon',
        date: '1/8/2019',
    },
    {
        bookName: 'My Serious Love',
        price: 1500,
        author: 'Yar Za Koe',
        date: '',
    },
]

const EditBook = ({...props}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button onClick={handleShow}>
                Edit Book
            </Button> */}
            <Modal show={show} className='modal-form'>
                <Modal.Header className='modal-header'>
                    <div className='closeButton' onClick={handleClose}>
                        <span className='top'></span>
                        <span className='bottom'></span>
                    </div>    
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className='modal-form-field'>
                            <Form.Label className='modal-label'>Book Name</Form.Label>
                            <Form.Control className='modal-input-field' type="text" />
                        </Form.Group>
                        <Form.Group className='modal-form-field'>
                            <Form.Label className='modal-label'>Price</Form.Label>
                            <Form.Control className='modal-input-field' type="text" />
                        </Form.Group>
                        <Form.Group className='modal-form-field'>
                            <Form.Label className='modal-label'>Author</Form.Label>
                            <Form.Control className='modal-input-field' type="text" />
                        </Form.Group>
                        <Form.Group className='modal-form-field'>
                            <Form.Label className='modal-label'>Date</Form.Label>
                            <Form.Control className='modal-input-field' type="text" />
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer className="modal-form-field modal-button-field">
                    <Button className="modal-button" onClick={handleClose}>Canel</Button>
                    <Button className="modal-button" onClick={handleClose}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const BookList = () => {

    const [bookInfo, setBookInfo] = useState(books);

    return (
        <Table className='table'>
            <thead className='table-head'>
                <tr>
                    <th>Book Name</th>
                    <th>Price</th>
                    <th>Author</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody className='table-body'>
                <tr>
                    {
                        bookInfo.map((book, index) => {
                            return (
                                <tr>
                                    <td key={index}>{book.bookName}</td>
                                    <td key={index}>{book.price}</td>
                                    <td key={index}>{book.author}</td>
                                    <td key={index}>{book.date}</td>
                                </tr>
                            )

                        })
                    }
                </tr>
            </tbody>
        </Table>
    )
}

export default BookList;