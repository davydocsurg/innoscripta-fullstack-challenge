import React, { useRef } from "react";

import { FormHandles } from "@unform/core";

import FormHandler from "./FormHandler";
import FormProps from "./FormProps";

export function useForm(props: FormProps = {}) {
    const form = new FormHandler(useRef<FormHandles>(null), props);

    return form;
}
