import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'

const Header = () => {
    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Typography variant="h6">
                    Arc Development
                </Typography>
                <AppBar position="static" color="primary">

                </AppBar>
            </Toolbar>
        </AppBar>
    );
};

export default Header;