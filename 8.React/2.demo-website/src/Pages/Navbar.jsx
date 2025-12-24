import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AppLayout from "../AppLayout";


const NavbarComponent = () => {
    return (
        <Navbar className="new" bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">Siimple.</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarNav" />

                <Navbar.Collapse id="navbarNav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/" active>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
