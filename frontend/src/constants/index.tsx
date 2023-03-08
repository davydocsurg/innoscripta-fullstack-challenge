import { AiFillHome } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";

export const sidebarData = [
    [
        { title: "Home", path: "/dashboard", icon: <AiFillHome /> },
        { title: "Logout", path: "/", icon: <CgLogOut /> },
    ],
];

export const drawerWidth = 230;

// HTTP 401
export const UNAUTHORIZED = "Session expired. Please login";

// HTTP 404
export const NOT_FOUND = "The requested resource was not found";

// HTTP 500
export const SERVER_ERROR = "Something has gone wrong, please try again";

// HTTP 503
export const SERVICE_UNAVAILABLE =
    "Service unavailable. Please try again later";

export const API_BASE_URL = "http://localhost:8000/api/";
