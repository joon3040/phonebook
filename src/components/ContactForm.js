import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
const ContactForm = () => {
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let dispatch = useDispatch();
  const createContact = (event) => {
    event.preventDefault();
    dispatch({ type: "CREATE_CONTACT", payload: { name, phone } });
    setName("");
    setPhone("");
  };
  return (
    <Form onSubmit={(event) => createContact(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default ContactForm;
