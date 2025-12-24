import React from "react";
import NavbarComponent from "./Navbar";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AppLayout from "../AppLayout";


const Contact = () => {
    return (
        // <AppLayout>
        <section id="contact" className="py-5 bg-light">
            <NavbarComponent />
            <Container className="mt-4">
                <h2 className="text-center mb-4">Get in Touch</h2>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Form className=" p-4 shadow-sm rounded bg-white">
                            <Form.Group className="mb-3" controlId="contactName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your full name"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="contactEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="you@example.com"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="contactMessage">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Type your message here..."
                                />
                            </Form.Group>
                            <Button variant="dark" type="submit" className="w-100">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
        // </AppLayout>
    );
};

export default Contact;
