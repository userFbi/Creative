import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


const EventIntro = () => {
    return (
        <Box className="eventIntro-section">

            {/* LEFT SIDE */}
            <Box className="eventIntro-left">
                <Typography variant="h4" className="eventIntro-title">
                    Exceptional Events & <br /> Private Dining
                </Typography>

                <Typography className="eventIntro-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </Typography>

                <Box className="eventIntro-stats">
                    <Box>
                        <Typography className="stat-number">500+</Typography>
                        <Typography className="stat-label">EVENTS HOSTED</Typography>
                    </Box>

                    <Box>
                        <Typography className="stat-number">200</Typography>
                        <Typography className="stat-label">MAX CAPACITY</Typography>
                    </Box>
                </Box>
            </Box>

            {/* RIGHT SIDE IMAGE */}
            <Box className="eventIntro-right">
                <img
                    src="https://images.pexels.com/photos/5638744/pexels-photo-5638744.jpeg"
                    alt="Dinner Event"
                    className="eventIntro-img"
                />

                {/* FLOATING BUTTON */}
                <Paper elevation={3} className="eventIntro-floating-btn">
                    <CalendarMonthIcon className="eventIntro-icon" />
                    <Typography className="floating-btn-text">Book Your Event Today</Typography>
                </Paper>
            </Box>

        </Box>
    );
};

export default EventIntro;
