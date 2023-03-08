import { AxiosError } from "axios";

type ErrorProps = {
    message: string;
    status: number;
};

type APIError = {
    message: string;
    status: number;
};

export default function handleAxiosError(error: AxiosError): ErrorProps {
    let errorMessage = error.message;
    let errorStatus = Number(error.status) || 500;

    console.error("error");
    console.error(error);
    if (error.response) {
        /**
         * The request was made and the server responded with a status code
         * that falls out of the range of 2xx
         */
        if ((error.response.data as APIError).message) {
            errorMessage = (error.response.data as APIError).message;
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
            errorMessage = "Bad Request";
            break;
        case 401:
            errorMessage = "Unauthorized";
            break;
        case 403:
            errorMessage = "Forbidden";
            break;
        case 404:
            errorMessage = "Not Found";
            break;
        case 405:
            errorMessage = "Method Not Allowed";
            break;
        case 406:
            errorMessage = "Not Acceptable";
            break;
        case 407:
            errorMessage = "Proxy Authentication Required";
            break;
        case 408:
            errorMessage = "Request Timeout";
            break;
        case 409:
            errorMessage = "Conflict";
            break;
        case 410:
            errorMessage = "Gone";
            break;
        case 411:
            errorMessage = "Length Required";
            break;
        case 412:
            errorMessage = "Precondition Failed";
            break;
        case 413:
            errorMessage = "Payload Too Large";
            break;
        case 414:
            errorMessage = "URI Too Long";
            break;
        case 415:
            errorMessage = "Unsupported Media Type";
            break;
        case 416:
            errorMessage = "Range Not Satisfiable";
            break;
        case 417:
            errorMessage = "Expectation Failed";
            break;
        case 418:
            errorMessage = "I'm a teapot";
            break;
        case 421:
            errorMessage = "Misdirected Request";
            break;
        case 422:
            errorMessage = "Unprocessable Entity";
            break;
        case 423:
            errorMessage = "Locked";
            break;
        case 424:
            errorMessage = "Failed Dependency";
            break;
        case 425:
            errorMessage = "Too Early";
            break;
        case 426:
            errorMessage = "Upgrade Required";
            break;
        case 428:
            errorMessage = "Precondition Required";
            break;
        case 429:
            errorMessage = "Too Many Requests";
            break;
        case 431:
            errorMessage = "Request Header Fields Too Large";
            break;
        case 451:
            errorMessage = "Unavailable For Legal Reasons";
            break;
        case 500:
            errorMessage = "Internal Server Error";
            break;
        case 501:
            errorMessage = "Not Implemented";
            break;
        case 502:
            errorMessage = "Bad Gateway";
            break;
        case 503:
            errorMessage = "Service Unavailable";
            break;
        case 504:
            errorMessage = "Gateway Timeout";
            break;
        case 505:
            errorMessage = "HTTP Version Not Supported";
            break;
        case 506:
            errorMessage = "Variant Also Negotiates";
            break;
        case 507:
            errorMessage = "Insufficient Storage";
            break;
        case 508:
            errorMessage = "Loop Detected";
            break;
        case 510:
            errorMessage = "Not Extended";
            break;
        case 511:
            errorMessage = "Network Authentication Required";
            break;
        default:
            errorMessage = "Unknown Error";
    }

    return errorMessage;
}
