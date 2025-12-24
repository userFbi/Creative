import React from "react";
import {
    Box,
    Grid,
    TextField,
    Typography,
    Button,
    MenuItem,
    Card,
    CardContent,
} from "@mui/material";


const BookTable = () => {
    return (
        <Box className="booking-container">
            <Grid container spacing={4} alignItems="center">

                {/* LEFT IMAGE */}
                <Grid item xs={12} md={6}>
                    <img
                        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
                        alt="Restaurant"
                        className="booking-image"
                    />
                </Grid>

                {/* RIGHT FORM */}
                <Grid item xs={12} md={6}>
                    <Card className="booking-card booking-form nice-form">
                        <CardContent>
                            <Typography className="booking-title">
                                Book Your Table
                            </Typography>

                            <Typography className="booking-subtitle">
                                Enjoy a fine dining experience with us
                            </Typography>

                            <form className="booking-form">

                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    className="booking-input"
                                />

                     
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    className="booking-input"
                                />

                                <TextField
                                    fullWidth
                                    label="Select Date"
                                    type="date"
                                    className="booking-input"
                                    InputLabelProps={{ shrink: true }}
                                />

                                <TextField
                                    fullWidth
                                    label="Select Time"
                                    type="time"
                                    className="booking-input"
                                    InputLabelProps={{ shrink: true }}
                                />

                                <TextField
                                    select
                                    fullWidth
                                    label="Number of Guests"
                                    className="booking-input"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                        <MenuItem key={num} value={num}>
                                            {num} Guest{num > 1 && "s"}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    fullWidth
                                    label="Special Requests (Optional)"
                                    multiline
                                    rows={3}
                                    className="booking-textarea"
                                />

                                <Button
                                    variant="contained"
                                    fullWidth
                                    className="booking-btn"
                                >
                                    Confirm Reservation
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BookTable;
