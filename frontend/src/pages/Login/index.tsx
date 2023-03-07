import React from "react";
import { Card, CardContent, Container } from "@mui/material";

// locals
import logo from "../../assets/logo.svg";
import { ContainerI, Content } from "./styles";

type LoginProps = {};

const Login = (): React.ReactElement => {
    return (
        <ContainerI>
            {/* <Content> */}
            {/* <img src={logo} alt="" /> */}
            <Card sx={{ minWidth: 275 }}>
                <CardContent></CardContent>
            </Card>
            {/* </Content> */}
        </ContainerI>
    );
};

export default Login;
