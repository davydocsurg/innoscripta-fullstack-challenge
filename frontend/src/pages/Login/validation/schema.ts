import * as Yup from "yup";

const schema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
});

export default schema;
