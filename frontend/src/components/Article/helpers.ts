import moment from "moment";
import {
    ARTICLE_DATE_FORMAT,
    DESCRIPTION_CHARACTERS_LIMIT,
} from "../../constants";

const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatPublishedDate = (date: string) => {
    return moment(date).format(ARTICLE_DATE_FORMAT);
};

const fixDescriptionSize = (description: string) => {
    if (description.length <= DESCRIPTION_CHARACTERS_LIMIT) {
        return description;
    }

    let reduced = description.slice(0, DESCRIPTION_CHARACTERS_LIMIT);
    let lastOccurrence = reduced.lastIndexOf(" ");
    let result = reduced.substring(0, lastOccurrence);

    return result + "...";
};

export { capitalizeFirstLetter, formatPublishedDate, fixDescriptionSize };
