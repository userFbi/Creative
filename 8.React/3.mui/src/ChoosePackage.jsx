import React from "react";
import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    Stack,
} from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const packages = [
    {
        icon: <DiamondIcon />,
        title: "Premium Package",
        price: "$129",
        per: "per person",
        features: [
            "5-course gourmet menu",
            "Premium wine selection",
            "Dedicated event coordinator",
            "Custom table arrangements",
            "Professional photography",
        ],
        guestRange: "30-80 guests",
    },
    {
        icon: <StarBorderIcon />,
        title: "Standard Package",
        price: "$89",
        per: "per person",
        features: [
            "3-course dinner menu",
            "Welcome cocktail hour",
            "Event planning assistance",
            "Audio/visual equipment",
            "Complimentary parking",
        ],
        guestRange: "20-120 guests",
        popular: true,
    },
    {
        icon: <FavoriteBorderIcon />,
        title: "Essentials Package",
        price: "$59",
        per: "per person",
        features: [
            "Buffet style dinner",
            "House wine & beer",
            "Basic decorations",
            "Standard seating",
            "4-hour venue rental",
        ],
        guestRange: "15-60 guests",
    },
];

const ChoosePackage = () => {
    return (
        <Box className="package-wrapper">
            <Typography className="package-heading">Choose Your Perfect Package</Typography>
            <Typography className="package-subheading">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam
            </Typography>

            <Grid container spacing={4} mt={4}>
                {packages.map((pkg, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card className={`package-card ${pkg.popular ? "popular-card" : ""}`}>

                            {pkg.popular && <div className="popular-badge">Most Popular</div>}

                            {/* ICON */}
                            <div className="package-icon">{pkg.icon}</div>

                            <CardContent>
                                <Typography className="pkg-title">{pkg.title}</Typography>

                                <Stack direction="row" alignItems="baseline" spacing={1} className="price-box">
                                    <Typography className="pkg-price">{pkg.price}</Typography>
                                    <Typography className="pkg-per">{pkg.per}</Typography>
                                </Stack>

                                <div className="pkg-features">
                                    {pkg.features.map((feature, i) => (
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                            key={i}
                                            className="feature-row"
                                        >
                                            <CheckCircleIcon className="check-icon" />
                                            <Typography className="feature-text">{feature}</Typography>
                                        </Stack>
                                    ))}
                                </div>

                                <div className="guest-range">{pkg.guestRange}</div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ChoosePackage;
