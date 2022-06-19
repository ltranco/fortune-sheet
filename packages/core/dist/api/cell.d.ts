import { Context } from "../context";
import { Cell } from "../types";
import { CommonOptions } from "./common";
export declare function getCellValue(ctx: Context, row: number, column: number, options?: CommonOptions & {
    type?: keyof Cell;
}): any;
export declare function setCellValue(ctx: Context, row: number, column: number, value: any, cellInput: HTMLDivElement | null, options?: CommonOptions): void;
export declare function clearCell(ctx: Context, row: number, column: number, options?: CommonOptions): void;
export declare function setCellFormat(ctx: Context, row: number, column: number, attr: keyof Cell, value: any, options?: CommonOptions): void;
