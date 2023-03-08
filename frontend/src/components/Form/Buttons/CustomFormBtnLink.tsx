import { Button } from "@mui/material";
import React from "react";

type CFBProps = {
    title: React.ReactNode;
    to: string;
    component?: any;
    variant?: "text" | "outlined" | "contained";
    color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "error"
        | "info"
        | "success"
        | "warning";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    sx?: any;
};

const CustomFormBtnLink: React.FC<CFBProps> = ({
    title,
    to,
    component,
    variant,
    color,
    size,
    fullWidth,
    sx,
}) => {
    return (
        <Button
            to={to}
            component={component}
            variant={variant}
            color={color}
            size={size}
            fullWidth={fullWidth}
            sx={sx}
        >
            {title}
        </Button>
    );
};

export default CustomFormBtnLink;
