import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppLayout from "../AppLayout";


const About = () => {
    return (
        // <AppLayout>
            <section id="about" className="mt-5 py-5">
                <Container>
                    <h2 className="text-center mb-4">About Me</h2>
                    <Row>
                        <Col md={6}>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quo
                                perferendis accusantium. Fugiat minima aliquam aliquid corporis,
                                culpa dolorem autem sit ut corrupti, quasi sed tenetur quas!
                                Minima, dolorem eum. We are a team of passionate developers,
                                designers, and strategists focused on building smart,
                                user-friendly, and scalable digital products. Lorem, ipsum dolor
                                sit amet consectetur adipisicing elit. Quas dolor harum error,
                                impedit sed veritatis, unde similique libero accusantium deserunt
                                tempora ducimus et recusandae iste sapiente facilis consequatur
                                cumque ipsum.
                            </p>
                        </Col>

                        <Col md={6}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                                necessitatibus animi ducimus quaerat voluptatibus quis
                                reprehenderit, eveniet aliquam! Deleniti error pariatur provident
                                nisi blanditiis maiores laudantium ad vitae ullam quae? Whether
                                you're a startup or an enterprise, we offer tailored tech services
                                to help bring your ideas to life and grow your business
                                effectively. Lorem ipsum dolor sit amet consectetur, adipisicing
                                elit. Maxime eveniet nihil necessitatibus iste voluptates? Amet
                                repellendus dolore mollitia enim odit iusto eveniet quisquam dicta
                                rem autem, molestiae reiciendis?
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        // </AppLayout>
    );
};

export default About;
