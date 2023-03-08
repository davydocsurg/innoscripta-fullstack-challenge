import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { Link as LinkRD } from "react-router-dom";
import styled, { css } from "styled-components";

interface IOpenProps {
    open: boolean;
}

export const Link = styled(LinkRD)`
    text-decoration: none;
    color: inherit;
`;
export const Item = styled(ListItem)`
    display: block;
`;

export const Button = styled(ListItemButton)<IOpenProps>`
    min-height: 48px;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 0;
    box-sizing: border-box;
    text-align: left;
    padding-top: 8px;
    padding-bottom: 8px;

    ${(props) =>
        props.open &&
        css`
            justify-content: "initial";
        `}

    ${(props) =>
        !props.open &&
        css`
            justify-content: "center";
        `}
`;

export const Icon = styled(ListItemIcon)<IOpenProps>`
    min-width: 0;
    justify-content: "center";
    padding-left: 3px;

    ${(props) =>
        props.open &&
        css`
            margin-right: 24px;
        `}

    ${(props) =>
        !props.open &&
        css`
            margin-right: "auto";
        `}
`;

export const Text = styled(ListItemText)<IOpenProps>`
    ${(props) =>
        props.open &&
        css`
            opacity: "1";
        `}

    ${(props) =>
        !props.open &&
        css`
            opacity: "0";
        `}
`;
