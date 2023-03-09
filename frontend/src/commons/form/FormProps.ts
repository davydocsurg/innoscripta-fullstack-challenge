import * as Yup from "yup";

import CustomGridFields from "../../components/Form/FormBuilder/types/CustomGridFields";

type FormProps = {
    fields?: CustomGridFields[];
    schema?: Yup.ObjectSchema<any>;
};

export default FormProps;
