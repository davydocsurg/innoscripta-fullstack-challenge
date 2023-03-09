import CustomInputProps from "../../Input/CustomInputProps";
import ISelectProps from "../../Select/ISelectProps";

import IGridSizes from "./IGridSizes";

/**
 * Grid Field
 * It have a Grid Size
 * It can be a Select or Input
 * @see ISelectProps
 * @see CustomInputProps
 * @see IGridSizes
 */
type CustomGridFields = IGridSizes & (ISelectProps | CustomInputProps);

export default CustomGridFields;
