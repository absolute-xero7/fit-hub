import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import './Navbar.css' // Import the CSS file

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="#exercises">
                    <ListItemText primary="Exercises" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ mt: { sm: '25px', xs: '15px' }, gap: { sm: '123px', xs: '20px' } }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" className="navbar" px="20px">
                <Link to="/" className="navbar-title-link">
                    <h1 className='navbar-title'>fitHub</h1>
                </Link>
                {isMobile ? (
                    <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} className="menu-button">
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Stack direction="row" className="navbar-links">
                        <Link to="/" className="navbar-link active">Home</Link>
                        <a href="#exercises" className="navbar-link">Exercises</a>
                    </Stack>
                )}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: { backgroundColor: '#f0f0f0' } // Set the background color directly here
                    }}
                >
                    {list()}
                </Drawer>
            </Stack>
        </Box>
    );
}

export default Navbar
