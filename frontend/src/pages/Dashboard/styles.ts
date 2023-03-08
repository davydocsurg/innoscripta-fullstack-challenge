import { Button as ButtonMUI } from "@mui/material";
import styled from "styled-components";

export const Filters = styled.section`
    width: 100%;
    margin-bottom: 50px;
`;

export const ArticlesList = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
`;

export const Button = styled(ButtonMUI)`
    margin-top: 16px !important;
    width: 150px;
`;

export const PersonalizeButton = styled(ButtonMUI)`
    margin-top: 16px !important;
    margin-left: 16px !important;
    width: 150px;
`;
