import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Box } from '@mui/material'

import './Navbar.css' // Import the CSS file

const Navbar = () => (
    <Box sx={{ mt: { sm: '25px', xs: '15px' }, gap: { sm: '123px', xs: '20px' } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" className="navbar" px="20px">
            <Link to="/" className="navbar-title-link">
                <h1 className='navbar-title'>fitHub</h1>
            </Link>
            <Stack
                direction="row"
                className="navbar-links"
            >
                <Link to="/" className="navbar-link active">Home</Link>
                <a href="#exercises" className="navbar-link">Exercises</a>
            </Stack>
        </Stack>
    </Box>
)

export default Navbar
