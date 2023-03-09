import React from "react";

import { TextFieldProps } from "@mui/material";
import { IconBaseProps } from "react-icons";

import IOption from "./IOption";
import SharedProps from "../../SharedProps";

type ISelectProps = {
    icon?: React.ComponentType<IconBaseProps>;
    multiple?: boolean;
    check?: boolean;
    chip?: boolean;
    label: string;
    readOnly?: boolean;
    maxOptionsLimit?: number;

    options: IOption[];
} & TextFieldProps &
    SharedProps;

export default ISelectProps;
