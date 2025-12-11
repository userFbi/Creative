import React from "react";
import { Container } from "react-bootstrap";
import AppLayout from "../AppLayout";

const Footer = () => {
    return (
        <AppLayout>
            <footer id="footer" className="bg-dark text-white text-center py-3">
                <Container>
                    <p className="mb-0">&copy; 2025 Siimple. All Rights Reserved.</p>
                </Container>
            </footer>
        </AppLayout>
    );
};

export default Footer;
