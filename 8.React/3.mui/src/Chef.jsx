import React from "react";
import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    Stack,
    Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";


const ChefSection = () => {
    return (
        <Box className="chef-container">
            <Grid container spacing={4} alignItems="center">

                {/* LEFT IMAGE */}
                <Grid item xs={12} md={6} className="chef-img-wrapper">
                    <img
                        src="https://bootstrapmade.com/content/demo/Savora/assets/img/restaurant/chef-3.webp"
                        alt="Chef"
                        className="chef-img"
                    />

                    <Box className="years-badge">
                        <Typography className="years-number">25+</Typography>
                        <Typography className="years-text">Years of Culinary Excellence</Typography>
                    </Box>
                </Grid>

                {/* RIGHT CONTENT */}
                <Grid item xs={12} md={6}>
                    <Typography className="chef-title">
                        Meet Our Executive Chef
                    </Typography>

                    <Typography className="chef-subtitle">
                        Crafting memorable dining experiences since 1999
                    </Typography>

                    <Typography className="chef-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </Typography>

                    <Typography className="chef-desc">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Typography>

                    {/* Awards */}
                    <Stack direction="row" spacing={4} className="award-section">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <EmojiEventsIcon className="award-icon" />
                            <Typography className="award-text">James Beard Award</Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <StarIcon className="award-icon" />
                            <Typography className="award-text">Michelin Recognition</Typography>
                        </Stack>
                    </Stack>

                    {/* Quote Box */}
                    <Card className="quote-card">
                        <CardContent>
                            <Typography className="quote-text">
                                "Cooking is not just about feeding people; it's about creating moments that
                                bring families and friends together around the table."
                            </Typography>
                            <Typography className="quote-author">
                                – Chef Alessandro Romano
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Buttons */}
                    <Stack direction="row" spacing={2} className="chef-buttons">
                        <Button variant="contained" className="primary-btn">
                            View Menu
                        </Button>
                        <Button variant="outlined" className="secondary-btn">
                            Book a Table
                        </Button>
                    </Stack>

                </Grid>
            </Grid>
        </Box>
    );
};

export default ChefSection;
