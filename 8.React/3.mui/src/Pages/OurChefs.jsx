import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";


const chefs = [
    {
        name: "Chef Rohan Mehta",
        role: "Head Chef",
        image:
            "https://i.pinimg.com/736x/5f/8f/07/5f8f07afaba47d568590593f78e56138.jpg",
        bio: "Specialist in  with 15+ years of experience."
    },
    {
        name: "Chef Ananya Sharma",
        role: "Sous Chef",
        image:
            "https://i.pinimg.com/1200x/fb/65/7d/fb657da85d75647359b4fd7ce4bac8f0.jpg",
        bio: "Expert in continental dishes  artistic plating."
    },
    {
        name: "Chef Daniel Cruz",
        role: "Pastry Chef",
        image:
            "https://i.pinimg.com/736x/d0/d0/95/d0d0959af8ca668a946c52dc79ec065e.jpg",
        bio: "Creates delightful desserts with a modern twist."
    }
];

const OurChefs = () => {
    return (
        <Box className="chefs-section">
            <Typography className="chefs-title">Our Master Chefs</Typography>
            <Typography className="chefs-subtitle">
                Meet the culinary experts behind our kitchen
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {chefs.map((chef, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="chef-card">
                            <img
                                src={chef.image}
                                alt={chef.name}
                                className="chef-image"
                            />
                            <CardContent>
                                <Typography className="chef-name">
                                    {chef.name}
                                </Typography>
                                <Typography className="chef-role">
                                    {chef.role}
                                </Typography>
                                <Typography className="chef-bio">
                                    {chef.bio}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurChefs;
