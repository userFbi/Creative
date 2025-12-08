import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const Header = () => {
    return (
        <Box className="navbar sticky-nav">

            {/* Logo */}
            <box className="logo">
                Savora
            </box>

            {/* Nav Links */}
            <Stack direction="row" spacing={4} className="nav-links">
                <Typography className="active">Home</Typography>
                <Typography variant="li">About</Typography>
                <Typography variant="li">Menu</Typography>
                <Typography variant="li">Chefs</Typography>
                <Typography variant="li">Events</Typography>
                <Typography variant="li">Contact</Typography>
            </Stack>

            {/* Button */}
            <Box className="btn">Book Table</Box>
        </Box>
    );
};

export default Header;
