import React from "react";

import { TextFieldProps } from "@mui/material";
import { IconBaseProps } from "react-icons";

import SharedProps from "../SharedProps";
import { Option } from "../../../types";

type ISelectProps = {
    icon?: React.ComponentType<IconBaseProps>;
    multiple?: boolean;
    check?: boolean;
    chip?: boolean;
    label: string;
    readOnly?: boolean;
    maxOptionsLimit?: number;
    fieldDescription?: string;

    options: Option[];
} & TextFieldProps &
    SharedProps;

export default ISelectProps;
