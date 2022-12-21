import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import React from 'react';
import { useState } from "react";
import { objectTypeInternalSlot } from '@babel/types';

const books = [
    {
        id: 1,
        bookName: 'Smooth of Love',
        price: 2000,
        author: 'Su Myat Mon Mon',
        date: '1/8/2019',
    },
    {
        id: 2,
        bookName: 'My Serious Love',
        price: 1500,
        author: 'Yar Za Koe',
        date: '',
    },
    {
        id: 3,
        bookName: 'Smooth of Love',
        price: 2000,
        author: 'Su Myat Mon Mon',
        date: '1/8/2019',
    },
    {
        id: 4,
        bookName: 'My Serious Love',
        price: 1500,
        author: 'Yar Za Koe',
        date: '',
    },
]

const EditBook = (props) => {
    console.log(props.book);

    const initialValues = { bookName: "", price: "", author: "", date: "", }

    const [bookInfo, setBookInfo] = useState(books);
    const [bookUpdate, setBookUpdate] = useState(props.book)
    const [obj, setObj] = useState(props.book);

    const handleChange = (e) => {
        const { name, value } = e.target
        // const update = bookUpdate.filter((updateBook) => {
        //     return {...updateBook, [name]: value};
        // })
        //setBookUpdate({ [name]: value, ...books })

        setObj({...obj, [name]: value})
        console.log(obj);
    }

    const handleEdit = (id) => {
        console.log(id)
    }

    return (
        <>
            <Modal show={props.show} className='modal-form' onHide={props.hide}>
                <Modal.Header className='modal-header'>
                    <div className='closeButton' onClick={props.hide}>
                        <span className='top'></span>
                        <span className='bottom'></span>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className='modal-form-field'>
                            <Form.Label className='modal-label'>Book Name</Form.Label>
                            <Form.Control
                                className='modal-input-field'
                                type="text"
                                name="bookName"
                                defaultValue={props.book.bookName}
                                onChange={e => {setBookUpdate({...props.book, bookName: e.target.value}); console.log(bookUpdate)}}/>
                         </Form.Group>
                        <Form.Group className='modal-form-field'>
                            <Form.Label className='modal-label'>Price</Form.Label>
                            <Form.Control
                                className='modal-input-field'
                                type="text"
                                defaultValue={props.book.price}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className='modal-form-field'>
                            <Form.Label className='modal-label'>Author</Form.Label>
                            <Form.Control
                                className='modal-input-field'
                                type="text"
                                defaultValue={props.book.author}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className='modal-form-field'>
                            <Form.Label className='modal-label'>Date</Form.Label>
                            <Form.Control
                                className='modal-input-field'
                                type="text"
                                defaultValue={props.book.date}
                                onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="modal-form-field modal-button-field">
                    <Button className="modal-button" onClick={props.hide}>Canel</Button>
                    <Button className="modal-button" onClick={() => handleEdit(props.book.id)}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const BookList = () => {

    const [bookInfo, setBookInfo] = useState(books);
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState([])

    const handleClose = () => setShow(false);

    const handleShow = (book) => {
        console.log(book);
        setShow(true);
        setModalInfo(book);
    }

    return (
        <>
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
                    {
                        bookInfo.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td >
                                        <a href="#" className="book-name" onClick={() => handleShow(book)}>
                                            {book.bookName}
                                        </a>
                                    </td>
                                    <td>{book.price}</td>
                                    <td>{book.author}</td>
                                    <td>{book.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <EditBook
                show={show}
                hide={handleClose}
                book={modalInfo}
            />
        </>
    )
}

export default BookList;