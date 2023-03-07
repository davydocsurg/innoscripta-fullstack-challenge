import React, { useCallback, useEffect, useRef, useState } from "react";
import { InputAdornment, TextField as MUITextField } from "@mui/material";

import { useField } from "@unform/core";
import { FiAlertCircle } from "react-icons/fi";

// local imports
import type CustomInputProps from "./CustomInputProps";
import { Prefix } from "./styles";
import { Error } from "@/styles/styled-components";
import { errorColor } from "@/styles/variables";
import { putMask } from "./hooks/putMask";
import { Mask } from "@/utils";

/**
 * Input component
 * @param {string} fieldname - name of the field
 */
const Input: React.FC<CustomInputProps> = ({
    mask,
    name,
    placeholder,
    label,
    mb,
    mt,
    ml,
    mr,
    icon: Icon,
    prefix,
    iconByDefault = false,
    variant = "outlined",
    readOnly = false,
    maxLength = undefined,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
            setValue(ref: any, value: string) {
                if (inputRef.current) {
                    inputRef.current.value = value ?? "";
                }
                setIsFilled(!!value);
            },
        });
    }, [fieldName, registerField]);

    /**
     * Handle key down event
     * Put mask on input if its designed to
     */
    const handleMaskEvents = useCallback(
        (e: any) => {
            if (mask) {
                putMask(e, mask);
            }
        },
        [mask]
    );

    const handleFocus = useCallback((e: any) => {
        setIsFocused(true);
    }, []);

    const handleBlur = useCallback((e: any) => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);

    const handleLength = useCallback(() => {
        if (!mask) {
            return;
        }

        if (!Mask.MASK_ONLY_NUMBERS.includes(mask)) {
            return;
        }

        return Mask.getOnlyNumbers(mask).length;
    }, []);

    const renderStartAdornment = useCallback(
        (Icon: any) => {
            if (iconByDefault || isFocused || isFilled) {
                if (Icon) {
                    return (
                        <InputAdornment position="start">
                            <Icon color={"#2e7e62"} size={20} />
                        </InputAdornment>
                    );
                }

                if (prefix) {
                    return (
                        <InputAdornment position="start">
                            <Prefix>{prefix}</Prefix>
                        </InputAdornment>
                    );
                }
            }
        },
        [isFocused, isFilled, Icon, iconByDefault, prefix]
    );

    return (
        <>
            <MUITextField
                id={fieldName}
                defaultValue={defaultValue}
                inputRef={inputRef}
                fullWidth
                name={name}
                label={label}
                placeholder={placeholder}
                onKeyDown={handleMaskEvents}
                onKeyUp={handleMaskEvents}
                onFocus={handleFocus}
                onBlur={handleBlur}
                variant={variant}
                error={!!error}
                sx={{
                    mb: Number(mb),
                    mt: Number(mt),
                    ml: Number(ml),
                    mr: Number(mr),
                }}
                InputLabelProps={{
                    shrink: isFilled || isFocused,
                    style: {
                        zIndex: 0,
                    },
                }}
                inputProps={{
                    maxLength: maxLength ?? handleLength(),
                }}
                InputProps={{
                    readOnly,
                    startAdornment: renderStartAdornment(Icon),
                    endAdornment: error && (
                        <Error title={error}>
                            <FiAlertCircle size={20} color={errorColor} />
                        </Error>
                    ),
                }}
                {...rest}
            />
        </>
    );
};

export default Input;
