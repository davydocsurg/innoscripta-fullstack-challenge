// HTTP 400
const BAD_REQUEST = "Bad request. Check your credentials and try again";

// HTTP 401
const UNAUTHORIZED = "Session expired. Please login";

// HTTP 403
const FORBIDDEN = "You are not authorized to perform this action";

// HTTP 404
const NOT_FOUND = "The requested resource was not found";

// HTTP 405
const METHOD_NOT_ALLOWED = "Method not allowed";

// HTTP 406
const NOT_ACCEPTABLE = "Not acceptable";

// HTTP 407
const PROXY_AUTH_REQUIRED = "Proxy authentication required";

// HTTP 408
const REQUEST_TIMEOUT = "Request timeout";

// HTTP 409
const CONFLICT = "The requested resource already exists";

// HTTP 410
const GONE = "The requested resource is no longer available";

// HTTP 411
const LENGTH_REQUIRED = "Length required";

// HTTP 412
const PRECONDITION_FAILED = "Precondition failed";

// HTTP 413
const REQUEST_ENTITY_TOO_LARGE = "Request entity too large";

// HTTP 414
const REQUEST_URI_TOO_LONG = "Request URI too long";

// HTTP 415
const UNSUPPORTED_MEDIA_TYPE = "Unsupported media type";

// HTTP 416
const REQUESTED_RANGE_NOT_SATISFIABLE = "Requested range not satisfiable";

// HTTP 417
const EXPECTATION_FAILED = "Expectation failed";

// HTTP 418
const IM_A_TEAPOT = "I'm a teapot";

// HTTP 421
const MISDIRECTED_REQUEST = "Misdirected request";

// HTTP 422
const UNPROCESSABLE_ENTITY = "Unprocessable entity";

// HTTP 423
const LOCKED = "Locked";

// HTTP 424
const FAILED_DEPENDENCY = "Failed dependency";

// HTTP 425
const UNORDERED_COLLECTION = "Unordered collection";

// HTTP 426
const UPGRADE_REQUIRED = "Upgrade required";

// HTTP 428
const PRECONDITION_REQUIRED = "Precondition required";

// HTTP 429
const TOO_MANY_REQUESTS = "Too many requests";

// HTTP 431
const REQUEST_HEADER_FIELDS_TOO_LARGE = "Request header fields too large";

// HTTP 451
const UNAVAILABLE_FOR_LEGAL_REASONS = "Unavailable for legal reasons";

// HTTP 500
const SERVER_ERROR = "Something has gone wrong, please try again";

// HTTP 501

const NOT_IMPLEMENTED = "Not implemented";

// HTTP 502
const BAD_GATEWAY = "Bad gateway";

// HTTP 503
const SERVICE_UNAVAILABLE = "Service unavailable. Please try again later";

// HTTP 504
const GATEWAY_TIMEOUT = "Gateway timeout";

// HTTP 505
const HTTP_VERSION_NOT_SUPPORTED = "HTTP version not supported";

// HTTP 506
const VARIANT_ALSO_NEGOTIATES = "Variant also negotiates";

// HTTP 507
const INSUFFICIENT_STORAGE = "Insufficient storage";

// HTTP 508
const LOOP_DETECTED = "Loop detected";

// HTTP 509
const BANDWIDTH_LIMIT_EXCEEDED = "Bandwidth limit exceeded";

// HTTP 510
const NOT_EXTENDED = "Not extended";

// HTTP 511
const NETWORK_AUTHENTICATION_REQUIRED = "Network authentication required";

// HTTP 598
const NETWORK_READ_TIMEOUT_ERROR = "Network read timeout error";

// HTTP 599
const NETWORK_CONNECT_TIMEOUT_ERROR = "Network connect timeout error";

// default error message
const DEFAULT_ERROR_MESSAGE = "Something went wrong. Please try again";

export {
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTH_REQUIRED,
    REQUEST_TIMEOUT,
    CONFLICT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    REQUEST_ENTITY_TOO_LARGE,
    REQUEST_URI_TOO_LONG,
    UNSUPPORTED_MEDIA_TYPE,
    REQUESTED_RANGE_NOT_SATISFIABLE,
    EXPECTATION_FAILED,
    IM_A_TEAPOT,
    MISDIRECTED_REQUEST,
    UNPROCESSABLE_ENTITY,
    LOCKED,
    FAILED_DEPENDENCY,
    UNORDERED_COLLECTION,
    UPGRADE_REQUIRED,
    PRECONDITION_REQUIRED,
    TOO_MANY_REQUESTS,
    REQUEST_HEADER_FIELDS_TOO_LARGE,
    UNAVAILABLE_FOR_LEGAL_REASONS,
    SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    HTTP_VERSION_NOT_SUPPORTED,
    VARIANT_ALSO_NEGOTIATES,
    INSUFFICIENT_STORAGE,
    LOOP_DETECTED,
    BANDWIDTH_LIMIT_EXCEEDED,
    NOT_EXTENDED,
    NETWORK_AUTHENTICATION_REQUIRED,
    NETWORK_READ_TIMEOUT_ERROR,
    NETWORK_CONNECT_TIMEOUT_ERROR,
    DEFAULT_ERROR_MESSAGE,
};
