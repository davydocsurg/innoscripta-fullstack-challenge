import React from "react";
import { MdOutlineAlternateEmail, MdOutlineDescription } from "react-icons/md";
import { CardContainer, CustomContainer } from "../shared/styles";
import logo from "../../assets/logo.svg";
import { FiLock, FiMail } from "react-icons/fi";
import FormBuilder from "../../components/Form/FormBuilder";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useForm } from "../../commons/hooks/form/useForm";
import schema from "./validation/schema";
import Input from "../../components/Form/Input";
import { Form } from "@unform/web";
import {
    CustomFormButton,
    CustomFormBtnLink,
} from "../../components/Form/Buttons";
import { Link } from "react-router-dom";
import { backgroundColor } from "../../styles";

const Register = (): React.ReactElement => {
    const form = useForm({ schema });

    const registrationFormFields = [
        {
            type: "text",
            name: "name",
            icon: MdOutlineDescription,
            label: "Name",
            placeholder: "Berta",
        },
        {
            type: "email",
            name: "email",
            icon: MdOutlineAlternateEmail,
            label: "Email",
            placeholder: "berta@innoscripta.com",
        },
        {
            type: "password",
            name: "password",
            icon: FiLock,
            label: "Password",
            placeholder: "********",
        },
        {
            type: "password",
            name: "password_confirmation",
            icon: FiLock,
            label: "Confirm your password",
            placeholder: "********",
        },
    ];

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
                        {/* <FormBuilder fields={registrationFormFields} /> */}
                        <Typography variant="h4" style={{ marginBottom: 4 }}>
                            Create an account
                        </Typography>
                        <Form ref={form.ref} onSubmit={() => {}}>
                            <Input
                                type="text"
                                name="First Name"
                                icon={MdOutlineDescription}
                                label="First Name"
                                placeholder="David"
                                mb={1}
                            />

                            <Input
                                type="text"
                                name="Last Name"
                                icon={MdOutlineDescription}
                                label="Last Name"
                                placeholder="Ndubuisi"
                                mb={1}
                            />

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
                            <Input
                                type="password"
                                name="password_confirmation"
                                icon={FiLock}
                                label="Password Confirmation"
                                placeholder="*******"
                                mb={1}
                            />
                            <CustomFormButton
                                title="Register"
                                onClick={() => {}}
                                variant="contained"
                                loading={false}
                            />
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Or
                            </Typography>
                            <CustomFormBtnLink
                                title="Login"
                                color="primary"
                                fullWidth={true}
                                to="/"
                                component={Link}
                            />
                        </Form>
                    </CardContent>
                </Card>
            </CardContainer>
        </CustomContainer>
    );
};

export default Register;
