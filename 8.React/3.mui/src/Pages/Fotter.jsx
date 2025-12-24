import React from "react";
import {
    Box,
    Typography,
    IconButton,
    Divider
} from "@mui/material";
import {
    Facebook,
    Instagram,
    Twitter,
    LocationOn,
    Phone,
    Email
} from "@mui/icons-material";


const Footer = () => {
    return (
        <Box className="footer">
            <Box className="footer-container">

                {/* BRAND */}
                <Box className="footer-col">
                    <Typography className="footer-logo">Savora</Typography>
                    <Typography className="footer-desc">
                        Crafting unforgettable dining experiences with passion,
                        flavor, and excellence.
                    </Typography>

                    <Box className="social-icons">
                        <IconButton><Facebook /></IconButton>
                        <IconButton><Instagram /></IconButton>
                        <IconButton><Twitter /></IconButton>
                    </Box>
                </Box>

                {/* LINKS */}
                <Box className="footer-col">
                    <Typography className="footer-title">Quick Links</Typography>
                    <Typography className="footer-link">Home</Typography>
                    <Typography className="footer-link">About Us</Typography>
                    <Typography className="footer-link">Menu</Typography>
                    <Typography className="footer-link">Events</Typography>
                    <Typography className="footer-link">Contact</Typography>
                </Box>

                {/* SERVICES */}
                <Box className="footer-col">
                    <Typography className="footer-title">Services</Typography>
                    <Typography className="footer-link">Private Dining</Typography>
                    <Typography className="footer-link">Corporate Events</Typography>
                    <Typography className="footer-link">Wedding Catering</Typography>
                    <Typography className="footer-link">Birthday Parties</Typography>
                </Box>

                {/* CONTACT */}
                <Box className="footer-col">
                    <Typography className="footer-title">Contact</Typography>

                    <Box className="footer-contact">
                        <LocationOn />
                        <span>123 Savora Street, India</span>
                    </Box>

                    <Box className="footer-contact">
                        <Phone />
                        <span>+91 98765 43210</span>
                    </Box>

                    <Box className="footer-contact">
                        <Email />
                        <span>contact@savora.com</span>
                    </Box>
                </Box>

            </Box>

            <Divider className="footer-divider" />

            <Typography className="footer-bottom">
                © 2025 Savora Restaurant. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
