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
import { Form as FormRig } from "@unform/web";
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
            name: "first_name",
            icon: MdOutlineDescription,
            label: "First Name",
            placeholder: "David",
        },
        {
            type: "text",
            name: "last_name",
            icon: MdOutlineDescription,
            label: "Last Name",
            placeholder: "Ndubuisi",
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
            label: "Confirm Password",
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
                        <Typography variant="h4" style={{ marginBottom: 4 }}>
                            Create an account
                        </Typography>
                        <FormRig ref={form.ref} onSubmit={() => {}}>
                            <FormBuilder fields={registrationFormFields} />
                        </FormRig>

                        <CustomFormButton
                            title="Register"
                            onClick={() => {}}
                            variant="contained"
                            loading={false}
                            sx={{ mt: 2 }}
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
                    </CardContent>
                </Card>
            </CardContainer>
        </CustomContainer>
    );
};

export default Register;
