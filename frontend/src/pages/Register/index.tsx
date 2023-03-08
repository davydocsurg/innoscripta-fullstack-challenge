import React from "react";
import { MdOutlineAlternateEmail, MdOutlineDescription } from "react-icons/md";
import { CardContainer, CustomContainer } from "../shared/styles";
import logo from "../../assets/logo.svg";
import { FiLock } from "react-icons/fi";
import FormBuilder from "../../components/Form/FormBuilder";
import { Card, CardContent } from "@mui/material";
import { useForm } from "../../commons/hooks/form/useForm";
import schema from "./validation/schema";

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
                <Card sx={{ minWidth: 275 }}>
                    <CardContent
                        sx={{
                            maxWidth: 400,
                            margin: "0 auto",
                        }}
                    >
                        <FormBuilder fields={registrationFormFields} />
                    </CardContent>
                </Card>
            </CardContainer>
        </CustomContainer>
    );
};

export default Register;
