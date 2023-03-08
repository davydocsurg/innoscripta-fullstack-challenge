import React from "react";
import { Form } from "@unform/web";
import {
    Button,
    Card,
    CardContent,
    Container,
    Typography,
} from "@mui/material";

// locals
import logo from "../../assets/logo.svg";
import { useForm } from "../../commons/hooks/form/useForm";
import schema from "./validation/schema";
import Input from "../../components/Form/Input";
import { FiLock, FiMail } from "react-icons/fi";
import { CardContainer, CustomContainer } from "../shared/styles";
import { CustomFormBtnLink } from "../../components/Form/Buttons";
import { Link } from "react-router-dom";
import { backgroundColor } from "../../styles";

type LoginProps = {};

const Login = (): React.ReactElement => {
    const form = useForm({ schema });
    return (
        <CustomContainer>
            <img src={logo} alt="Innoscripta" />
            <CardContainer>
                <Card sx={{ minWidth: 275, bgcolor: backgroundColor }}>
                    <CardContent
                        sx={{
                            maxWidth: 400,
                            margin: "0 auto",
                        }}
                    >
                        <Typography variant="h4" component="div">
                            Welcome back!
                        </Typography>
                        <Typography variant="h6" style={{ marginBottom: 4 }}>
                            Login to your account
                        </Typography>
                        <Form ref={form.ref} onSubmit={() => {}}>
                            <Input
                                type="text"
                                name="email"
                                icon={FiMail}
                                label="Email"
                                placeholder="you@example.com"
                                mb={1}
                            />
                            <Input
                                type="password"
                                name="password"
                                icon={FiLock}
                                label="Password"
                                placeholder="*******"
                                mb={1}
                            />
                            <Button
                                fullWidth
                                size="large"
                                sx={{ mt: 3 }}
                                variant="contained"
                                type="submit"
                                color="primary"
                            >
                                Login
                            </Button>

                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Or
                            </Typography>
                            <CustomFormBtnLink
                                title="Register"
                                color="primary"
                                fullWidth={true}
                                to="/register"
                                component={Link}
                            />
                        </Form>
                    </CardContent>
                </Card>
            </CardContainer>
        </CustomContainer>
    );
};

export default Login;
