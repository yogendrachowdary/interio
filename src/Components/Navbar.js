import React, { useState } from 'react';
import logo from '../Assests/lolo.png';
import user from '../Assests/user.png';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button component={Link} to="/" color="inherit" style={{ marginRight: '20px' }}>
                        Home
                    </Button>
                    <Button component={Link} to="/gallery" color="inherit" style={{ marginRight: '20px' }}>
                        Gallery
                    </Button>
                    <Button component={Link} to="/services" color="inherit" style={{ marginRight: '20px' }}>
                        Services
                    </Button>
                    <Button component={Link} to="/login" color="inherit" style={{ marginRight: '20px' }}>
                        Login
                    </Button>
                    <Button color="inherit">
                        <Avatar alt="User" src={user} />
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
