import * as Yup from 'yup';

import IGridField from "components/Form/FormBuilder/interfaces/IGridField";

export default interface IFormProps {
    fields?: IGridField[];
    schema?: Yup.ObjectSchema<any>;
}  