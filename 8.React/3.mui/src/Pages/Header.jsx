import React, { useState } from "react";
import {
    Box,
    Typography,
    Stack,
    IconButton,
    Drawer
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box className="navbar sticky-nav">

                {/* Logo */}
                <Box className="logo">Savora</Box>

                {/* Desktop Nav */}
                <Stack direction="row" spacing={4} className="nav-links">
                    <Typography component="a" href="/" className="active">Home</Typography>
                    <Typography component="a" href="/about">About</Typography>
                    <Typography component="a" href="/menu">Menu</Typography>
                    <Typography component="a" href="/chefs">Chefs</Typography>
                    <Typography component="a" href="/event">Events</Typography>
                    <Typography component="a" href="/contact">Contact</Typography>
                </Stack>

                {/* Desktop Button */}
                <Box className="btn desktop-btn">Book Table</Box>

                {/* Mobile Menu Icon */}
                <IconButton
                    className="menu-icon"
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon fontSize="large" />
                </IconButton>
            </Box>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box className="mobile-menu">
                    {["Home", "About", "Menu", "Chefs", "Events", "Contact"].map((item) => (
                        <Typography
                            key={item}
                            component="a"
                            href={`/${item.toLowerCase()}`}
                            className="mobile-link"
                            onClick={() => setOpen(false)}
                        >
                            {item}
                        </Typography>
                    ))}

                    <Box className="btn mobile-btn">Book Table</Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
