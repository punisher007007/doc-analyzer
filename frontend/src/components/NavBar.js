import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Document Analyzer
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Upload
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;