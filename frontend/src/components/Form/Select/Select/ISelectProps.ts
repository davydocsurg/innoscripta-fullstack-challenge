import React from 'react';

import { TextFieldProps } from '@mui/material';
import { IconBaseProps } from 'react-icons';

import IFieldsSharedProps from '../IFieldsSharedProps';

import IOption from './IOption';
  
type ISelectProps = {
    icon?: React.ComponentType<IconBaseProps>;
    multiple?: boolean;
    check?: boolean;
    chip?: boolean;
    label: string;
    readOnly?: boolean;
    maxOptionsLimit?: number;

    options: IOption[];
} & TextFieldProps & IFieldsSharedProps;

export default ISelectProps;