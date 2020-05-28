import React from "react";
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {ReactSVG} from "react-svg";


const Navbar: React.FC = () => {
    return (
        <>
            <AppBar position="static" id="navbar">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon id="menu-icon" />
                    </IconButton>

                    <div id="logo">
                        <ReactSVG src="/img/icons/logo.svg"/>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navbar;