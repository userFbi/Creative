import { Box, Typography } from '@mui/material'
import React from 'react'

const Cards = ({ data }) => {
    return (
        <Box className="card-container">
            {data.map((i, index) => (
                <div className="card" key={index}>
                    <div className="left">
                        <img src={i.image} alt="img" />
                    </div>

                    <div className="right">
                        <h1>{i.name}</h1>
                        <p className="sub">
                            <span className={i.status.toLowerCase()}></span>
                            {i.status} - {i.species}
                        </p>

                        <p className="label">Last known location:</p>
                        <p className="value">{i.location}</p>

                        <p className="label">First seen in:</p>
                        <p className="value">{i.first_seen}</p>
                    </div>
                </div>
            ))}
        </Box>
    )
}

export default Cards