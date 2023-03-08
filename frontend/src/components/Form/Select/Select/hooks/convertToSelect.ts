import IOption from "../IOption";

/**
 * Function to convert array of objects or array of strings to array of IOption
 * 
 * @param array - array of objects or array of strings
 * @param value - key of object
 * @param label - label of object
 * @param defaultValue - default value
 * @returns 
 */
export function convertToSelect(
    array: any[] = [], 
    value?: string|undefined, 
    label?: string|undefined, 
    defaultValue?: any
): IOption[] {
    let options: IOption[] = [];
    
    if (!value || !label) {
        options = array.map((el, ind) => ({ 
            value: String(ind), 
            label: el
        }));
    }

    if (value && label) {
        options = array.map((item: any) => {
            return {
                value: item[value],
                label: item[label]
            }
        });
    }

    if (defaultValue) {
        options.unshift({
            value: defaultValue,
            label: defaultValue
        });
    }

    return options;
}