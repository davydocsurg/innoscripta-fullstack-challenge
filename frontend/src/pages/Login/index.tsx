import React, { useCallback } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { backgroundColor } from "../../styles";
import { Toast } from "../../utils/toast";
import { useAuth } from "../../contexts";
import { messages, navUrl } from "../../services";

type LoginFormData = {
    email: string;
    password: string;
};

const Login = (): React.ReactElement => {
    const navigate = useNavigate();
    const { loading, login, setLoading } = useAuth();
    const form = useForm({ schema });

    const handleSubmit = useCallback(
        async (data: LoginFormData) => {
            setLoading(true);
            await form.validation(data);
            const toast = new Toast().loading();

            try {
                await login({ ...data });
                toast.dismiss();

                setLoading(false);
                navigate(navUrl.dashboard);
            } catch (error: any) {
                setLoading(false);
                toast.error(messages.loginError);
            }
        },
        [login, form, navigate]
    );

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
                        <Form ref={form.ref} onSubmit={handleSubmit}>
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
                                disabled={loading}
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
                                to={navUrl.register}
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
