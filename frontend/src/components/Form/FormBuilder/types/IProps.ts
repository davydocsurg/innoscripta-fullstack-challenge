import { GridSpacing } from '@mui/material';
import { ResponsiveStyleValue } from '@mui/system';

import IGridField from './IGridField';

/**
 * Grid Props
 */
type IGridProps = {
    fields?: IGridField[];
    spacing?: ResponsiveStyleValue<GridSpacing>
    columns?: ResponsiveStyleValue<number>
};

export default IGridProps;