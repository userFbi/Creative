import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Card,
} from "@mui/material";


const ContactPage = () => {
    return (
        <Box className="contact-section">
            {/* TITLE */}
            <Typography className="contact-title">Contact Us</Typography>
            <Typography className="contact-subtitle">
                We'd love to hear from you. Reach out for reservations or inquiries.
            </Typography>

            {/* CONTENT */}
            <Box className="contact-grid">
                {/* LEFT: INFO */}
                <Box className="contact-info">
                    <Card className="contact-card">
                        <Typography className="info-title">📍 Address</Typography>
                        <Typography className="info-text">
                            123 Savora Street, Food City, India
                        </Typography>
                    </Card>

                    <Card className="contact-card">
                        <Typography className="info-title">📞 Phone</Typography>
                        <Typography className="info-text">
                            +91 98765 43210
                        </Typography>
                    </Card>

                    <Card className="contact-card">
                        <Typography className="info-title">✉️ Email</Typography>
                        <Typography className="info-text">
                            contact@savora.com
                        </Typography>
                    </Card>

                    <Card className="contact-card">
                        <Typography className="info-title">⏰ Opening Hours</Typography>
                        <Typography className="info-text">
                            Mon – Sun: 11:00 AM – 11:00 PM
                        </Typography>
                    </Card>
                </Box>

                {/* RIGHT: FORM */}
                <Card className="contact-form-card">
                    <Typography className="form-title">
                        Send Us a Message
                    </Typography>

                    <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        className="contact-input"
                    />

                    <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        className="contact-input"
                    />

                    <TextField
                        fullWidth
                        label="Your Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        className="contact-input"
                    />

                    <Button className="contact-btn">
                        Send Message
                    </Button>
                </Card>
            </Box>

            {/* MAP */}
            <Box className="contact-map">
                <iframe
                    title="map"
                    src="https://maps.google.com/maps?q=India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
            </Box>
        </Box>
    );
};

export default ContactPage;
