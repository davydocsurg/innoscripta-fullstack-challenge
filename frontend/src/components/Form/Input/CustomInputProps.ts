import { ComponentType } from "react";

import { TextFieldProps } from "@mui/material";
import { IconBaseProps } from "react-icons";

import SharedProps from "../SharedProps";

type CustomInputProps = {
    mask?: string;
    icon?: ComponentType<IconBaseProps>;
    iconByDefault?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    prefix?: string;
} & TextFieldProps &
    SharedProps;

export default CustomInputProps;
