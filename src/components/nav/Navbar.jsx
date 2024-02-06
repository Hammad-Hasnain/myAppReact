import { Box, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (

        <Box sx={{ backgroundColor: '#000', p: 1, }}>
            <Typography sx={{ color: '#fff', fontSize: '2em', fontFamily: 'cursive' }}>H Square</Typography>
        </Box>
    )
}

export default Navbar