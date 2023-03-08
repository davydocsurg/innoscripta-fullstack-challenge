import { AxiosError } from "axios";
import {
    BAD_GATEWAY,
    BAD_REQUEST,
    CONFLICT,
    DEFAULT_ERROR_MESSAGE,
    EXPECTATION_FAILED,
    FAILED_DEPENDENCY,
    FORBIDDEN,
    GATEWAY_TIMEOUT,
    GONE,
    HTTP_VERSION_NOT_SUPPORTED,
    IM_A_TEAPOT,
    INSUFFICIENT_STORAGE,
    LENGTH_REQUIRED,
    LOCKED,
    LOOP_DETECTED,
    METHOD_NOT_ALLOWED,
    MISDIRECTED_REQUEST,
    NETWORK_AUTHENTICATION_REQUIRED,
    NETWORK_CONNECT_TIMEOUT_ERROR,
    NETWORK_READ_TIMEOUT_ERROR,
    NOT_ACCEPTABLE,
    NOT_EXTENDED,
    NOT_FOUND,
    NOT_IMPLEMENTED,
    PRECONDITION_FAILED,
    PROXY_AUTH_REQUIRED,
    REQUESTED_RANGE_NOT_SATISFIABLE,
    REQUEST_ENTITY_TOO_LARGE,
    REQUEST_HEADER_FIELDS_TOO_LARGE,
    REQUEST_TIMEOUT,
    REQUEST_URI_TOO_LONG,
    SERVER_ERROR,
    SERVICE_UNAVAILABLE,
    TOO_MANY_REQUESTS,
    UNAUTHORIZED,
    UNAVAILABLE_FOR_LEGAL_REASONS,
    UNORDERED_COLLECTION,
    UNPROCESSABLE_ENTITY,
    UNSUPPORTED_MEDIA_TYPE,
    UPGRADE_REQUIRED,
    VARIANT_ALSO_NEGOTIATES,
} from "../constants";

type ErrorProps = {
    message: string;
    status: number;
};

type APIError = {
    errors: any;
    status: number;
};

export default function errorHandler(error: AxiosError): ErrorProps {
    let errorMessage = error.message;
    let errorStatus = Number(error.status) || 500;

    console.error("error: ", error);
    if (error.response) {
        /**
         * The request was made and the server responded with a status code
         * that falls out of the range of 2xx
         */
        if ((error.response.data as APIError).errors.email) {
            errorMessage = (error.response.data as APIError).errors.email[0];
            errorStatus = (error.response.data as APIError).status;
        }
    } else if (error.request) {
        /**
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance of
         * http.ClientRequest in node.js
         */
        errorMessage = getMessageByStatus(error.request.status);
        errorStatus = error.request.status;
        // console.log(errorStatus, "errorStatus", errorMessage, "errorMessage");
    }

    return {
        message: errorMessage,
        status: errorStatus,
    };
}

function getMessageByStatus(status: number) {
    let errorMessage: string;

    switch (status) {
        case 400:
            errorMessage = BAD_REQUEST;
            break;
        case 401:
            errorMessage = UNAUTHORIZED;
            break;
        case 403:
            errorMessage = FORBIDDEN;
            break;
        case 404:
            errorMessage = NOT_FOUND;
            break;
        case 405:
            errorMessage = METHOD_NOT_ALLOWED;
            break;
        case 406:
            errorMessage = NOT_ACCEPTABLE;
            break;
        case 407:
            errorMessage = PROXY_AUTH_REQUIRED;
            break;
        case 408:
            errorMessage = REQUEST_TIMEOUT;
            break;
        case 409:
            errorMessage = CONFLICT;
            break;
        case 410:
            errorMessage = GONE;
            break;
        case 411:
            errorMessage = LENGTH_REQUIRED;
            break;
        case 412:
            errorMessage = PRECONDITION_FAILED;
            break;
        case 413:
            errorMessage = REQUEST_ENTITY_TOO_LARGE;
            break;
        case 414:
            errorMessage = REQUEST_URI_TOO_LONG;
            break;
        case 415:
            errorMessage = UNSUPPORTED_MEDIA_TYPE;
            break;
        case 416:
            errorMessage = REQUESTED_RANGE_NOT_SATISFIABLE;
            break;
        case 417:
            errorMessage = EXPECTATION_FAILED;
            break;
        case 418:
            errorMessage = IM_A_TEAPOT;
            break;
        case 421:
            errorMessage = MISDIRECTED_REQUEST;
            break;
        case 422:
            errorMessage = UNPROCESSABLE_ENTITY;
            break;
        case 423:
            errorMessage = LOCKED;
            break;
        case 424:
            errorMessage = FAILED_DEPENDENCY;
            break;
        case 425:
            errorMessage = UNORDERED_COLLECTION;
            break;
        case 426:
            errorMessage = UPGRADE_REQUIRED;
            break;
        case 428:
            errorMessage = PRECONDITION_FAILED;
            break;
        case 429:
            errorMessage = TOO_MANY_REQUESTS;
            break;
        case 431:
            errorMessage = REQUEST_HEADER_FIELDS_TOO_LARGE;
            break;
        case 451:
            errorMessage = UNAVAILABLE_FOR_LEGAL_REASONS;
            break;
        case 500:
            errorMessage = SERVER_ERROR;
            break;
        case 501:
            errorMessage = NOT_IMPLEMENTED;
            break;
        case 502:
            errorMessage = BAD_GATEWAY;
            break;
        case 503:
            errorMessage = SERVICE_UNAVAILABLE;
            break;
        case 504:
            errorMessage = GATEWAY_TIMEOUT;
            break;
        case 505:
            errorMessage = HTTP_VERSION_NOT_SUPPORTED;
            break;
        case 506:
            errorMessage = VARIANT_ALSO_NEGOTIATES;
            break;
        case 507:
            errorMessage = INSUFFICIENT_STORAGE;
            break;
        case 508:
            errorMessage = LOOP_DETECTED;
            break;
        case 510:
            errorMessage = NOT_EXTENDED;
            break;
        case 511:
            errorMessage = NETWORK_AUTHENTICATION_REQUIRED;
            break;
        case 598:
            errorMessage = NETWORK_READ_TIMEOUT_ERROR;
        case 599:
            errorMessage = NETWORK_CONNECT_TIMEOUT_ERROR;
        default:
            errorMessage = DEFAULT_ERROR_MESSAGE;
    }

    return errorMessage;
}
