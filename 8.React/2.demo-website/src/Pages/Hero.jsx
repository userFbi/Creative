import React from "react";
import { Container, Button } from "react-bootstrap";
import AppLayout from "../AppLayout";

const Hero = () => {
    return (
        <AppLayout>
            <div className="hero d-flex flex-column justify-content-center text-white">
                <Container>
                    <h1>Welcome to Our Platform</h1>
                    <p className="lead">Helping you grow with innovative tech solutions</p>
                    <Button href="#about" variant="dark" className="mt-3">
                        Explore More
                    </Button>
                </Container>
            </div>
        </AppLayout>
    );
};

export default Hero;
