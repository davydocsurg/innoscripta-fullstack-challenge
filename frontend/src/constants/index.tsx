import { AiFillHome } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";

export const sidebarData = [
    [
        { title: "Home", path: "/dashboard", icon: <AiFillHome /> },
        { title: "Logout", path: "/", icon: <CgLogOut /> },
    ],
];

export const drawerWidth = 230;

export const API_BASE_URL = "http://localhost:8000/api/";
