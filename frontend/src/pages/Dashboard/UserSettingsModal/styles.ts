import { Button as ButtonMUI } from "@mui/material";
import styled, { css } from "styled-components";

import { Title } from "../../../components/Article/styles";

interface ModalProps {
    isOpen: boolean;
}

export const ModalBackground = styled.div<ModalProps>`
    width: 100%;
    height: 100%;
    background: rgba(32, 29, 29, 0.75);
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    cursor: pointer;

    ${(props) =>
        !props.isOpen &&
        css`
            display: none;
        `}
`;

export const ModalContainer = styled.div`
    top: 50%;
    background: white;
    left: 50%;
    right: auto;
    bottom: auto;
    width: 100%;
    max-width: 430px;
    height: 450px;
    padding: 20px;
    border-radius: 4px;
    z-index: 999 !important;
`;

export const CloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 8px 16px 24px 50px;

    button {
        background-color: transparent;
        border: none;
        font-size: 25px;
        cursor: pointer;
    }
`;

export const Body = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    small {
        font-size: 14px;
        color: #9e9e9e;
        margin-bottom: 50px !important;
    }
`;

export const Button = styled(ButtonMUI)`
    margin-top: 16px !important;
    width: 150px;
`;

export const TitleCustomize = styled(Title)`
    margin-bottom: 5px !important;
`;
