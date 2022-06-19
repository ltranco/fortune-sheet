import type { Sheet as SheetType, Selection, Freezen, Range } from "../types";
import { Context } from "../context";
export declare const selectionCache: {
    isPasteAction: boolean;
};
export declare function seletedHighlistByindex(ctx: Context, r1: number, r2: number, c1: number, c2: number): {
    left: number;
    width: number;
    top: number;
    height: number;
};
export declare function normalizeSelection(ctx: Context, selection: SheetType["luckysheet_select_save"]): Selection[] | undefined;
export declare function selectTitlesMap(rangeMap: Record<string, number>, range1: number, range2: number): Record<string, number>;
export declare function selectTitlesRange(map: Record<string, number>): number[][];
export declare function pasteHandlerOfPaintModel(ctx: Context, copyRange: Context["luckysheet_copy_save"]): void;
export declare function selectionCopyShow(range: any, ctx: Context): void;
export declare function moveHighlightCell(ctx: Context, postion: "down" | "right", index: number, type: "rangeOfSelect" | "rangeOfFormula"): void;
export declare function rangeValueToHtml(ctx: Context, sheetId: string, ranges?: Range): string | null;
export declare function copy(ctx: Context): void;
export declare function deleteSelectedCellText(ctx: Context): void;
export declare function selectIsOverlap(ctx: Context, range?: any): boolean;
export declare function selectAll(ctx: Context): void;
export declare function getSelectionStyle(ctx: Context, selection: Selection, freeze: Freezen | undefined): {
    left: number | undefined;
    top: number | undefined;
    width: number | undefined;
    height: number | undefined;
    display: string;
};
