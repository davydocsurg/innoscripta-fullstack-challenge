import { RefObject } from "react";

import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import IGridField from "../../../components/Form/FormBuilder/types/IGridField";
import ISelectProps from "../../../components/Form/Select/ISelectProps";

import Toast from "../toast/Toast";

import getValidationsErrors from "../../../utils/getValidationErrors";

import IFormProps from "./IFormProps";

interface IConfig {
    errorMessage?: string;
    schema?: Yup.ObjectSchema<any>;
    abort?: boolean;
}

export default class FormHandler {
    constructor(ref: RefObject<FormHandles>, props: IFormProps) {
        this.ref = ref;
        this.schema = props.schema;
        this.fields = props.fields;
    }

    ref: RefObject<FormHandles>;
    schema: Yup.ObjectSchema<any> | undefined;
    fields: IGridField[] | undefined;

    async validation(dataValidation: any, config?: IConfig) {
        try {
            this.ref.current?.setErrors({});

            const schema =
                this.schema ?? (config?.schema as Yup.ObjectSchema<any>);

            await schema.validate(dataValidation, {
                abortEarly: false,
            });

            return true;
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationsErrors(err);
                this.ref.current?.setErrors(errors);

                new Toast().error(errors[Object.keys(errors)[0]]);
            } else {
                new Toast().error(
                    config?.errorMessage ??
                        `Oops... There was an error submitting the form!`
                );
            }
        }

        if (config?.abort || config?.abort === undefined) {
            throw new Error("Validation error");
        }
    }

    getData() {
        return this.ref.current?.getData();
    }

    setData(data: object) {
        this.ref.current?.setData({
            ...this.getData(),
            ...data,
        });
    }

    clear() {
        function handleClearSelect(fld: ISelectProps) {
            if (fld.multiple || fld.check || fld.chip) {
                return [];
            }

            return "";
        }

        function handleClear(fields: IGridField[] | undefined) {
            let objForm: { [key: string]: never[] | string } = {};

            fields?.forEach((field) => {
                const name = field.name as string;
                if (field.type === "select") {
                    objForm[name] = handleClearSelect(field as ISelectProps);
                }
            });

            return objForm;
        }

        this.ref.current?.reset();

        this.ref.current?.setData(handleClear(this.fields));
    }
}
