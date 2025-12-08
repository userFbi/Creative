import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
    return (
        <Box className="hero-container">
            <Box className="hero-content">
                <Typography variant="h2" className="hero-title">
                    Welcome to Savora
                </Typography>

                <Typography variant="subtitle1" className="hero-subtitle">
                    Experience delicious food crafted with passion and perfection.
                </Typography>

                <Button variant="contained" className="hero-btn">
                    Explore More
                </Button>
            </Box>
        </Box>
    );
};

export default Hero;
