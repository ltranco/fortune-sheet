import { Context } from "../context";
export declare function insertRowCol(ctx: Context, op: {
    type: "row" | "column";
    index: number;
    count: number;
    direction: "lefttop" | "rightbottom";
    id: string;
}): void;
export declare function deleteRowCol(ctx: Context, op: {
    type: "row" | "column";
    start: number;
    end: number;
    id?: string;
}): void;
export declare function computeRowlenArr(ctx: Context, rowHeight: number, cfg: any): number[];
