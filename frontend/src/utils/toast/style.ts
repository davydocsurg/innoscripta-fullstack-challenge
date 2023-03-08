import { ToastOptions, UpdateOptions } from "react-toastify";

import { errorColor, successColor } from "../../styles/variables";

const defaultPatterns: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export default class Style {
    public static success: ToastOptions = {
        ...defaultPatterns,
        theme: "colored",
        style: {
            backgroundColor: successColor,
        },
    };

    public static error: ToastOptions = {
        ...defaultPatterns,
        theme: "colored",
        style: {
            backgroundColor: errorColor,
        },
    };

    public static successUpdate(
        message: string,
        optionsParam: object = {}
    ): UpdateOptions<unknown> {
        return {
            ...defaultPatterns,
            render: message,
            type: "success",
            isLoading: false,
            theme: "colored",
            style: {
                backgroundColor: successColor,
            },
            ...optionsParam,
        };
    }

    public static errorUpdate(
        message: string,
        optionsParam: object = {}
    ): UpdateOptions<unknown> {
        return {
            ...defaultPatterns,
            render: message,
            type: "error",
            position: "top-right",
            isLoading: false,
            theme: "colored",
            style: {
                backgroundColor: errorColor,
            },
            ...optionsParam,
        };
    }
}
