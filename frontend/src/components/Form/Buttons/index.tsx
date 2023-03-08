import React from "react";
import { LoadingButton } from "@mui/lab";
import { ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

type CBProps = {
    title: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    type?: "button" | "submit" | "reset";
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
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    sx?: any;
    className?: string;
    ref?: React.Ref<HTMLButtonElement>;
};

const CButton = styled(LoadingButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(grey[700]),
    backgroundColor: grey[700],
    "&:hover": {
        backgroundColor: grey[900],
    },
}));

const CustomFormButton: React.FC<CBProps> = ({
    title,
    onClick,
    disabled,
    loading,
    type,
    variant,
    color,
    size,
    fullWidth,
    startIcon,
    endIcon,
    sx,
    className,
    ref,
    // component,
}) => {
    return (
        <CButton
            onClick={onClick}
            disabled={disabled}
            loading={loading}
            type={type}
            variant={variant}
            color={color}
            size={size}
            fullWidth={fullWidth}
            startIcon={startIcon}
            endIcon={endIcon}
            sx={sx}
            className={className}
            ref={ref}
        >
            {title}
        </CButton>
    );
};

export default CustomFormButton;
