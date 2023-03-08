import axios from "axios";
import {
    API_BASE_URL,
    NOT_FOUND,
    SERVER_ERROR,
    SERVICE_UNAVAILABLE,
    UNAUTHORIZED,
} from "../constants";

const api = axios.create({
    baseURL: API_BASE_URL,
});

const createError = (message?: string, code?: number, errors?: any) => {
    const error: any = new Error();
    error.message = message;
    error.code = code;
    error.errors = errors;
    return `${error.message ? `${error.message} ` : ""}
      Details: ${error.errors! ? JSON.stringify(errors) : ""}
      Code: ${error.code}
      `;
};

api.interceptors.response.use(
    (response) => Promise.resolve(response),

    (error) => {
        let promise;

        // check if request was cancelled
        if (axios.isCancel(error)) {
            // reject promise with error
            promise = Promise.reject(error);
        } else {
            // get error status
            const { status, data } = error;

            // handle errors
            switch (status) {
                case 0:
                    promise = Promise.reject(
                        createError(SERVER_ERROR, 0, data.errors)
                    );
                    break;

                case 400:
                    promise = Promise.reject(
                        createError(data.message, 400, data.errors)
                    );
                    break;

                case 401:
                    // check if request was not login
                    if (!error.config.url.includes("login")) {
                        localStorage.removeItem("auth-token");
                        window.location.href = "/login";

                        promise = Promise.reject(
                            createError(UNAUTHORIZED, 401, data.errors)
                        );
                    } else {
                        promise = Promise.reject(
                            createError(data.message, 401, data.errors)
                        );
                    }
                    break;

                case 404:
                    promise = Promise.reject(
                        createError(NOT_FOUND, 404, data.errors)
                    );
                    break;

                case 500:
                    promise = Promise.reject(
                        createError(SERVER_ERROR, 500, data.errors)
                    );
                    break;

                case 503:
                    promise = Promise.reject(
                        createError(SERVICE_UNAVAILABLE, 503, data.errors)
                    );
                    break;

                default:
                    promise = Promise.reject(
                        createError(data.message, status, data.errors)
                    );
                    break;
            }
        }

        return promise;
    }
);

export default api;
