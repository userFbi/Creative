import { Box } from '@mui/material'
import React from 'react'
import "./header.css"

const Header = () => {
    const today = new Date();
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
    const day = today.toLocaleDateString("en-IN", { weekday: "long" });
    const date = today.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return (
        <Box className="flex header">
            <div className="left">
                <h1>Life Os</h1>
            </div>
            {/* <div className="right">Welcome Back<br />{today.toLocaleDateString('en-IN', options)}</div> */}
            <div className="header-right">
                {day}, <br />
                {date}
            </div>
        </Box>
    )
}

export default Header