import * as Yup from "yup";

const schema = Yup.object().shape({
    first_name: Yup.string().required("First name is required!"),
    last_name: Yup.string().required("Last name is required!"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email address!"),
    password: Yup.string()
        .min(8, "The password must contain at least 8 digits!")
        .matches(/(?=.*[a-z])/, "Password must contain a lowercase letter")
        .matches(/(?=.*[A-Z])/, "Password must contain an uppercase"),
    password_confirmation: Yup.string().oneOf(
        [Yup.ref("password"), null!],
        "Password doesn't match!"
    ),
});

export default schema;
