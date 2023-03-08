import React, { Dispatch, SetStateAction } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { AppBar } from "./styles";

interface IProps {
    setOpen: Dispatch<SetStateAction<boolean>>;
    open: boolean;
}

const Navbar: React.FC<IProps> = ({ setOpen, open }) => {
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: "none" }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    sx={{ color: "#f5f5f5" }}
                    noWrap
                    component="div"
                >
                    Innoscripta
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
