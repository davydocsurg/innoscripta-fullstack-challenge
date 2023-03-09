import { GridSpacing } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";

import CustomGridFields from "./CustomGridFields";

/**
 * Grid Props
 */
type IGridProps = {
    fields?: CustomGridFields[];
    spacing?: ResponsiveStyleValue<GridSpacing>;
    columns?: ResponsiveStyleValue<number>;
};

export default IGridProps;
