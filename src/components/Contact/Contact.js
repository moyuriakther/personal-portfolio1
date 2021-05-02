import { Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import React from "react";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lfq3mek",
        "template_m8a8il4",
        e.target,
        "user_ybkNbgx9eFbiXNVdZUAIL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div style={{backgroundColor:'#0A192F', color:'white', height:'700px' }}>
      <div className="container">
        <Form onSubmit={sendEmail}>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formGroupMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Message"
              name="message"
              as="textarea" rows={3}
              required
            />
          </Form.Group>
          <button className="btn btn-success">Send</button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
