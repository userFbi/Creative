import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppLayout from "../AppLayout";


const Gallery = () => {
    return (
        // <AppLayout>


            <section id="gallery" className="py-5">
                <Container>
                    <h2 className="text-center mb-4">Our Work in Action</h2>

                    <Row className="g-3">
                        <Col md={4}>
                            <img
                                src="https://picsum.photos/600/400?random=1"
                                className="gallery-img rounded"
                                alt="Gallery Image 1"
                            />
                        </Col>

                        <Col md={4}>
                            <img
                                src="https://picsum.photos/600/400?random=2"
                                className="gallery-img rounded"
                                alt="Gallery Image 2"
                            />
                        </Col>

                        <Col md={4}>
                            <img
                                src="https://picsum.photos/600/400?random=3"
                                className="gallery-img rounded"
                                alt="Gallery Image 3"
                            />
                        </Col>

                        <Col md={4}>
                            <img
                                src="https://picsum.photos/600/400?random=4"
                                className="gallery-img rounded"
                                alt="Gallery Image 4"
                            />
                        </Col>

                        <Col md={4}>
                            <img
                                src="https://picsum.photos/600/400?random=5"
                                className="gallery-img rounded"
                                alt="Gallery Image 5"
                            />
                        </Col>

                        <Col md={4}>
                            <img
                                src="https://picsum.photos/600/400?random=6"
                                className="gallery-img rounded"
                                alt="Gallery Image 6"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        // </AppLayout>
    );
};

export default Gallery;
