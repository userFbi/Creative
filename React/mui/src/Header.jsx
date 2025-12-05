import { Grid, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid size="grow">
                    <Typography variant='h4'>logo</Typography>
                </Grid>
                <Grid size={6}>
                    <Typography variant='a'>size=6</Typography>
                </Grid>
                <Grid size="grow">
                    <Typography>size=grow</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header