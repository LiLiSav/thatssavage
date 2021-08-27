import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CardOptions.css';

export default function ContactUsForm() {
    // 'http://localhost:5000/'
    // 'https://thatssavage-backend.herokuapp.com/'
    const alert = useAlert();

    const [formData, setFormData] = useState({});

    const updateInput = (event) => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://thatssavage-backend.herokuapp.com/', formData).then(res => {
            console.log(res);
            if(res.data === "success") {
                alert.success('Thanks for your message!')
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
            } 
            else {
                throw new Error(res);
            }
        })
        .catch(error => {
            console.log(error)
            alert.error('Something went wrong! Refresh the page or give us a call.')
        })
    }

    return (
        <div className="container bg-secondary card shadow p-3 mb-2 mt-2">
            <h2 className="title text-warning">Contact Us</h2>
            <p className="text-dark">Got a question? Want a quote? Got some feedback?
            Don&apos;t hesitate to get in contact and we will be happy to help. Thank you!</p><hr />
            <div className="contactUs text-warning font-weight-bold ">
                <Form onSubmit={handleSubmit} >
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationFName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="name"
                                required
                                type="text"
                                placeholder="Enter name"
                                onChange={updateInput}
                                value={formData.name || ''}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                    onChange={updateInput}
                                    value={formData.email || ''}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email.
                            </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="contactForm.Textarea">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea"
                                rows={3} placeholder="Please enter your comment"
                                required
                                name="message"
                                onChange={updateInput}
                                value={formData.message || ''}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please add your comment.
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.Check
                            name="check"
                            required
                            label="I have read and agree to the "
                            feedback="You must agree before submitting."
                        />
                        <Link className="text-warning" style={{ paddingLeft:"20px" }} to='Terms-and-conditions'> <u>Terms and Conditions</u></Link>
                        
                    </Form.Group>
                    <Button className="btn btn-warning my-2 my-md-2" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}
