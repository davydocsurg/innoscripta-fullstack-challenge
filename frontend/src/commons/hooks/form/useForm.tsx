import React, { useRef } from "react";

import { FormHandles } from '@unform/core';

import FormHandler from "./FormHandler";
import IFormProps from "./IFormProps";

export function useForm(props: IFormProps = {}) {
  const form = new FormHandler(useRef<FormHandles>(null), props);

  return form;
}