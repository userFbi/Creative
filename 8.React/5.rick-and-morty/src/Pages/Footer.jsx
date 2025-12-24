import { Box, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {
    return (
        <>
            <Box className="footer-section">
                <Typography variant='ul' className='footer-abt'>
                    <Typography variant='li'>CHARACTERS: 826</Typography>
                    <Typography variant='li'>LOCATION: 126</Typography>
                    <Typography variant='li'>EPISODES: 51</Typography>
                </Typography>
                <Box className="status">
                    <Typography>SERVER STATUS</Typography>
                    <Typography className='sub green-status' />
                </Box>
                <Box className="company">
                    <Typography variant='ul'>
                        <Typography variant='li'>Deploys By <br />netlify</Typography>
                        <Typography variant='li'>Powered by <br />Setellate</Typography>
                    </Typography>
                </Box>
                <Box className="footer-links">
                    <Typography variant='ul'>
                        <Typography variant='li'><GitHubIcon /></Typography>
                        <Typography variant='li'><TwitterIcon /></Typography>
                        <Typography variant='li'><FavoriteIcon /></Typography>
                    </Typography>
                </Box>
                <Box className="author">
                    <CodeIcon /><Typography>by <span>Axel Furmann</span> 2025</Typography>
                </Box>

            </Box>
        </>
    )
}

export default Footer