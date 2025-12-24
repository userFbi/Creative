import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppLayout from "../AppLayout";

const Testimonials = () => {
    return (
        
            
        
        <section id="testimonials" className="bg-light py-5">
            <Container>
                <h2 className="text-center mb-5">What Clients Say</h2>
                <Row>

                    {/* Card 1 */}
                    <Col md={4} className="mb-4">
                        <Card className="shadow-sm h-100 text-center p-3">
                            <Card.Img
                                src="/images/person-1.jpg"
                                alt="Client"
                                className="rounded-circle mb-3"
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    objectFit: "cover",
                                    margin: "0 auto",
                                }}
                            />

                            <p className="mb-3">
                                "Absolutely stunning photos! Every shot beautifully captured the
                                emotions of our event. Highly recommended!"
                            </p>
                            <h5 className="fw-bold mb-1">— Aditya Verma</h5>
                            <p className="text-muted mb-0">Event Planner</p>
                        </Card>
                    </Col>

                    {/* Card 2 */}
                    <Col md={4} className="mb-4">
                        <Card className="shadow-sm h-100 text-center p-3">
                            <Card.Img
                                src="/images/person-2.jpg"
                                alt="Client"
                                className="rounded-circle mb-3"
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    objectFit: "cover",
                                    margin: "0 auto",
                                }}
                            />

                            <p className="mb-3">
                                "The photoshoot experience was smooth and professional. The
                                final edits were beyond my expectations!"
                            </p>
                            <h5 className="fw-bold mb-1">— Nitin Kulkarni</h5>
                            <p className="text-muted mb-0">Fashion Blogger</p>
                        </Card>
                    </Col>

                    {/* Card 3 */}
                    <Col md={4} className="mb-4">
                        <Card className="shadow-sm h-100 text-center p-3">
                            <Card.Img
                                src="/images/person-3.jpg"
                                alt="Client"
                                className="rounded-circle mb-3"
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    objectFit: "cover",
                                    margin: "0 auto",
                                }}
                            />

                            <p className="mb-3">
                                "Incredible attention to detail! Our product photos came out
                                crisp, vibrant, and perfect for marketing."
                            </p>
                            <h5 className="fw-bold mb-1">— Karan Deshmukh</h5>
                            <p className="text-muted mb-0">Business Owner</p>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </section>
       
    );
};

export default Testimonials;
