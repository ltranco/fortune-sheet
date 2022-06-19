import { api, Cell, Context, Op, Range, Selection, Presence, Settings, SingleRange } from "@fortune-sheet/core";
import { SetContextOptions } from "../../context";
export declare function generateAPIs(context: Context, setContext: (recipe: (ctx: Context) => void, options?: SetContextOptions) => void, settings: Required<Settings>, cellInput: HTMLDivElement | null, scrollbarX: HTMLDivElement | null, scrollbarY: HTMLDivElement | null): {
    applyOp: (ops: Op[]) => void;
    getCellValue: (row: number, column: number, options?: api.CommonOptions & {
        type?: keyof Cell;
    }) => any;
    setCellValue: (row: number, column: number, value: any, options?: api.CommonOptions & {
        type?: keyof Cell;
    }) => void;
    clearCell: (row: number, column: number, options?: api.CommonOptions) => void;
    setCellFormat: (row: number, column: number, attr: keyof Cell, value: any, options?: api.CommonOptions) => void;
    freeze: (type: "row" | "column" | "both", range: {
        row: number;
        column: number;
    }, options?: api.CommonOptions) => void;
    insertRowOrColumn: (type: "row" | "column", index: number, count: number, direction?: "lefttop" | "rightbottom", options?: api.CommonOptions) => void;
    deleteRowOrColumn: (type: "row" | "column", start: number, end: number, options?: api.CommonOptions) => void;
    setRowHeight: (rowInfo: Record<string, number>, options?: api.CommonOptions) => void;
    setColumnWidth: (columnInfo: Record<string, number>, options?: api.CommonOptions) => void;
    getRowHeight: (rows: number[], options?: api.CommonOptions) => Record<number, number>;
    getColumnWidth: (columns: number[], options?: api.CommonOptions) => Record<number, number>;
    getSelection: () => {
        row: number[];
        column: number[];
    }[] | undefined;
    getFlattenRange: (range: Range) => {
        r: number;
        c: number;
    }[];
    getCellsByFlattenRange: (range?: {
        r: number;
        c: number;
    }[] | undefined) => (Cell | null)[];
    getSelectionCoordinates: () => string[];
    getCellsByRange: (range: Selection, options?: api.CommonOptions) => (Cell | null)[][];
    getHtmlByRange: (range: Range, options?: api.CommonOptions) => string | null;
    setSelection: (range: Range, options?: api.CommonOptions) => void;
    setCellValuesByRange: (data: any[][], range: SingleRange, options?: api.CommonOptions) => void;
    setCellFormatByRange: (attr: keyof Cell, value: any, range: Range | SingleRange, options?: api.CommonOptions) => void;
    mergeCells: (ranges: Range, type: string, options?: api.CommonOptions) => void;
    cancelMerge: (ranges: Range, options?: api.CommonOptions) => void;
    getAllSheets: () => import("@fortune-sheet/core").Sheet[];
    getSheet: (options?: api.CommonOptions) => import("@fortune-sheet/core").Sheet;
    addSheet: () => void;
    deleteSheet: (options?: api.CommonOptions) => void;
    activateSheet: (options?: api.CommonOptions) => void;
    setSheetName: (name: string, options?: api.CommonOptions) => void;
    setSheetOrder: (orderList: Record<string, number>) => void;
    scroll: (options: {
        scrollLeft?: number;
        scrollTop?: number;
        targetRow?: number;
        targetColumn?: number;
    }) => void;
    addPresences: (newPresences: Presence[]) => void;
    removePresences: (arr: {
        username: string;
        userId?: string;
    }[]) => void;
};
