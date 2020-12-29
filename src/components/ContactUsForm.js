import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Col, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Axios } from '../firebase/firebaseConfig'


/*export default function ContactUsForm() {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <div className="container bg-secondary card shadow p-3 mb-2 mt-2">
            <h2 className="title text-warning">Contact Us</h2>
            <p className="text-dark">Got a question? Want a quote? Got some feedback?
            Don&apos;t hesitate to get in contact and we will be happy to help. Thank you!</p><hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required />
                </div>
                <button type="submit">{status}</button>
            </form>
        </div>
            
    );
};*/


export default function ContactUsForm() {
    //const [validated, setValidated] = useState(false);

    const [formData, setFormData] = useState({})

    const updateInput = e => {
        console.log(formData)
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            })
    }
    const handleSubmit = event => {
        /*const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);*/
        event.preventDefault()
        sendEmail()
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }
    const sendEmail = () => {
        Axios.post(
            'https://us-central1-thatssavage-69800.cloudfunctions.net/submit',
            formData
        )
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="container bg-secondary card shadow p-3 mb-2 mt-2">
            <h2 className="title text-warning">Contact Us</h2>
            <p className="text-dark">Got a question? Want a quote? Got some feedback?
            Don&apos;t hesitate to get in contact and we will be happy to help. Thank you!</p><hr />
            <div className="contactUs text-warning font-weight-bold ">
                <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
            </div>
        </div>
    )
}

/*<Form onSubmit={handleSubmit} >
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
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
        />
    </Form.Group>
    <Button className="btn btn-warning my-2 my-md-2" type="submit">Submit</Button>
</Form>*/


