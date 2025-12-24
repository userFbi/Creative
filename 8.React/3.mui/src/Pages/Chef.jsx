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
import "./chef.css"; // make sure this path matches

const ChefSection = () => {
    return (
        <Box className="chef-container" sx={{ width: "100%" }}>
            {/* NOTE: sx ensures no wrap at md and explicit 50% widths for children */}
            <Grid
                container
                spacing={4}
                alignItems="center"
                className="chef-grid"
                wrap="wrap"
                sx={{
                    flexWrap: { xs: "wrap", md: "nowrap" }, // important: no wrap on md+
                }}
            >
                {/* LEFT IMAGE */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    className="chef-img-wrapper"
                    sx={{
                        flexBasis: { md: "50%" },
                        maxWidth: { md: "50%" }, // force 50% at md+
                    }}
                >
                    <img
                        src="https://bootstrapmade.com/content/demo/Savora/assets/img/restaurant/chef-3.webp"
                        alt="Chef"
                        className="chef-img"
                    />

                    <Box className="years-badge">
                        <Typography className="years-number">25+</Typography>
                        <Typography className="years-text">
                            Years of Culinary Excellence
                        </Typography>
                    </Box>
                </Grid>

                {/* RIGHT CONTENT */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    className="chef-content-wrapper"
                    sx={{
                        flexBasis: { md: "50%" },
                        maxWidth: { md: "50%" }, // force 50% at md+
                    }}
                >
                    <Typography className="chef-title">Meet Our Executive Chef</Typography>

                    <Typography className="chef-subtitle">
                        Crafting memorable dining experiences since 1999
                    </Typography>

                    <Typography className="chef-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </Typography>

                    <Typography className="chef-desc">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </Typography>

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

                    <Card className="quote-card">
                        <CardContent>
                            <Typography className="quote-text">
                                "Cooking is not just about feeding people; it's about creating
                                moments that bring families and friends together around the
                                table."
                            </Typography>
                            <Typography className="quote-author">
                                – Chef Alessandro Romano
                            </Typography>
                        </CardContent>
                    </Card>

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
