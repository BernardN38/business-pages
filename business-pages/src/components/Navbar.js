import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  style={{position:"static", background: "#191010" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color:"white" }}>
              Business App
            </Link>
          </Typography>
          <Typography variant="h7">
            <Link to={user?"signout":"signup"}style={{ textDecoration: "none", color:"white" }}>
              {user?"Sign Out":"Login/SignUp"}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
