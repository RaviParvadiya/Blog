import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My Blog</Typography>
        <Button color="inherit">
          <Link to="/">Home</Link>
        </Button>
        <Button color="inherit">
          <Link to="/about">About</Link>
        </Button>
        <Button color="inherit">
          <Link to="/contact">Contact</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
