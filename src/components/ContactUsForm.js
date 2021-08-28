import { useState } from 'react';
import { Button, Col, Form, InputGroup, Spinner } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/CardOptions.css';

export default function ContactUsForm() {
    // 'http://localhost:5000/'
    // 'https://thatssavage-backend.herokuapp.com/'
    const alert = useAlert();

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const updateInput = (event) => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('https://thatssavage-backend.herokuapp.com/', formData)
            console.log(res);
            if(res.data === "success") {
                alert.success('Thanks for your message!')
                setFormData({
                    name: formData.name,
                    email: '',
                    message: ''
                })
            } 
            else {
                throw new Error(res);
            }
        } 
        catch (err) {
            console.log(err);
            alert.error('Something went wrong! Refresh the page or give us a call.');
        }
        setLoading(false);
    }

    return (
        <div className="container bg-secondary card shadow p-3 mb-2 mt-2">
            <h2 className="title text-warning">Contact Us</h2>
            <p className="text-dark" style={{fontWeight: 'bold'}}>Got a question? Want a quote? Got some feedback?
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
                            label={
                                <Link className="text-warning" to='Terms-and-conditions'>
                                    I have read and agree to the Terms and Conditions
                                </Link>
                            }
                            feedback="You must agree before submitting."
                        />
                        
                    </Form.Group>
                    <Button className="btn btn-warning my-2 my-md-2" type="submit">
                        {loading && <Spinner
                            as="span"
                            animation="border"
                            role="status"
                            aria-hidden='true' /> }

                        {!loading && 'Submit'}
                    </Button>
                </Form>
            </div>
        </div>
    )
}
