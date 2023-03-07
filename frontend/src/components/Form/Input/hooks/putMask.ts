import Mask from "../../../../utils/Mask";

/**
 * Get the value of the input and put the mask on it
 * 
 * @param e - event 
 * @param mask - mask to be applied
 * @returns event with the value with the mask
 */
export function putMask(e: any, mask: string)
{
    let value = e.target.value;
    
    const pureSize = Mask.getOnlyNumbers(mask);
    const specials = Mask.getOnlySpecials(value);
    
    if (Mask.MASK_ONLY_NUMBERS.includes(mask)) {
        e.target.maxLength = pureSize.length + specials.length;
    }
    
    e.target.value = Mask.applyMask(value, mask);

    return e;
}