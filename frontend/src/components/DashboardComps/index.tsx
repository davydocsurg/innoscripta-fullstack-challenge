import React, { useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./NavBar";
import Drawer from "./SideBar";
import { Main } from "./styles";
import { DrawerHeader } from "./styles";

interface IProps {
    children?: JSX.Element;
}

const DashboardComp: React.FC<IProps> = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <Navbar setOpen={setOpen} open={open} />
            <Drawer setOpen={setOpen} open={open} />

            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box>
    );
};

export default DashboardComp;
