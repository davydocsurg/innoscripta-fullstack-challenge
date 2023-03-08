import React, { useCallback, useState } from "react";
import { MdOutlineAlternateEmail, MdOutlineDescription } from "react-icons/md";
import { CardContainer, CustomContainer } from "../shared/styles";
import logo from "../../assets/logo.svg";
import { FiLock, FiMail } from "react-icons/fi";
import FormBuilder from "../../components/Form/FormBuilder";
import { Card, CardContent, Typography } from "@mui/material";
import { useForm } from "../../commons/hooks/form/useForm";
import schema from "./validation/schema";
import { Form as FormRig } from "@unform/web";
import {
    CustomFormButton,
    CustomFormBtnLink,
} from "../../components/Form/Buttons";
import { Link, useNavigate } from "react-router-dom";
import { backgroundColor } from "../../styles";
import { Toast } from "../../utils/toast";
import { api, errorHandler } from "../../services";

type RegistrationFormData = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const Register = (): React.ReactElement => {
    const form = useForm({ schema });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback(
        async (data: RegistrationFormData) => {
            setLoading(true);

            await form.validation(data);

            const toast = new Toast().loading();

            try {
                const res = await api.post("/register", data);
                console.log(res);
                setLoading(false);
            } catch (error: any) {
                const { message } = errorHandler(error);
                // console.error(message, "\n", error);
                toast.error(message);

                setLoading(false);
            }
        },
        [form, navigate]
    );

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
                        <FormRig ref={form.ref} onSubmit={handleSubmit}>
                            <FormBuilder fields={registrationFormFields} />

                            <CustomFormButton
                                title="Register"
                                variant="contained"
                                loading={loading}
                                sx={{ mt: 2 }}
                                type="submit"
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
                        </FormRig>
                    </CardContent>
                </Card>
            </CardContainer>
        </CustomContainer>
    );
};

export default Register;
