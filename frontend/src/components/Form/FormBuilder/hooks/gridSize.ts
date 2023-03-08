import IGridSizes from "../types/IGridSizes";

/**
 * Get the size of the grid for the xs breakpoint
 */
export function xsSize({ gridSize }: IGridSizes) {
    return gridSize?.xs;
}

/**
 * Get the size of the grid for the sm breakpoint
 */
export function smSize({ gridSize }: IGridSizes) {
    return gridSize?.sm ?? gridSize?.xs;
}

/**
 * Get the size of the grid for the md breakpoint
 */
export function mdSize({ gridSize }: IGridSizes) {
    return gridSize?.md ?? gridSize?.sm ?? gridSize?.xs;
}

/**
 * Get the size of the grid for the lg breakpoint
 */
export function lgSize({ gridSize }: IGridSizes) {
    return gridSize?.lg ?? gridSize?.md ?? gridSize?.sm ?? gridSize?.xs;
}

/**
 * Get the size of the grid for the xl breakpoint
 */
export function xlSize({ gridSize }: IGridSizes) {
    return (
        gridSize?.xl ??
        gridSize?.lg ??
        gridSize?.md ??
        gridSize?.sm ??
        gridSize?.xs
    );
}
