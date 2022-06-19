import { Settings, Sheet as SheetType, Op } from "@fortune-sheet/core";
import React from "react";
import "./index.css";
import { generateAPIs } from "./api";
export declare type WorkbookInstance = ReturnType<typeof generateAPIs>;
declare type AdditionalProps = {
    onChange?: (data: SheetType[]) => void;
    onOp?: (op: Op[]) => void;
};
declare const Workbook: React.ForwardRefExoticComponent<Settings & AdditionalProps & React.RefAttributes<{
    applyOp: (ops: Op[]) => void;
    getCellValue: (row: number, column: number, options?: import("@fortune-sheet/core/dist/api").CommonOptions & {
        type?: "v" | "m" | "mc" | "f" | "ct" | "qp" | "spl" | "bg" | "lo" | "rt" | "ps" | keyof import("@fortune-sheet/core").CellStyle | undefined;
    }) => any;
    setCellValue: (row: number, column: number, value: any, options?: import("@fortune-sheet/core/dist/api").CommonOptions & {
        type?: "v" | "m" | "mc" | "f" | "ct" | "qp" | "spl" | "bg" | "lo" | "rt" | "ps" | keyof import("@fortune-sheet/core").CellStyle | undefined;
    }) => void;
    clearCell: (row: number, column: number, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    setCellFormat: (row: number, column: number, attr: "v" | "m" | "mc" | "f" | "ct" | "qp" | "spl" | "bg" | "lo" | "rt" | "ps" | keyof import("@fortune-sheet/core").CellStyle, value: any, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    freeze: (type: "row" | "column" | "both", range: {
        row: number;
        column: number;
    }, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    insertRowOrColumn: (type: "row" | "column", index: number, count: number, direction?: "lefttop" | "rightbottom", options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    deleteRowOrColumn: (type: "row" | "column", start: number, end: number, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    setRowHeight: (rowInfo: Record<string, number>, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    setColumnWidth: (columnInfo: Record<string, number>, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    getRowHeight: (rows: number[], options?: import("@fortune-sheet/core/dist/api").CommonOptions) => Record<number, number>;
    getColumnWidth: (columns: number[], options?: import("@fortune-sheet/core/dist/api").CommonOptions) => Record<number, number>;
    getSelection: () => {
        row: number[];
        column: number[];
    }[] | undefined;
    getFlattenRange: (range: import("@fortune-sheet/core").Range) => {
        r: number;
        c: number;
    }[];
    getCellsByFlattenRange: (range?: {
        r: number;
        c: number;
    }[] | undefined) => (import("@fortune-sheet/core").Cell | null)[];
    getSelectionCoordinates: () => string[];
    getCellsByRange: (range: import("@fortune-sheet/core").Selection, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => (import("@fortune-sheet/core").Cell | null)[][];
    getHtmlByRange: (range: import("@fortune-sheet/core").Range, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => string | null;
    setSelection: (range: import("@fortune-sheet/core").Range, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    setCellValuesByRange: (data: any[][], range: import("@fortune-sheet/core").SingleRange, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    setCellFormatByRange: (attr: "v" | "m" | "mc" | "f" | "ct" | "qp" | "spl" | "bg" | "lo" | "rt" | "ps" | keyof import("@fortune-sheet/core").CellStyle, value: any, range: import("@fortune-sheet/core").Range | import("@fortune-sheet/core").SingleRange, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    mergeCells: (ranges: import("@fortune-sheet/core").Range, type: string, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    cancelMerge: (ranges: import("@fortune-sheet/core").Range, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    getAllSheets: () => SheetType[];
    getSheet: (options?: import("@fortune-sheet/core/dist/api").CommonOptions) => SheetType;
    addSheet: () => void;
    deleteSheet: (options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    activateSheet: (options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    setSheetName: (name: string, options?: import("@fortune-sheet/core/dist/api").CommonOptions) => void;
    setSheetOrder: (orderList: Record<string, number>) => void;
    scroll: (options: {
        scrollLeft?: number | undefined;
        scrollTop?: number | undefined;
        targetRow?: number | undefined;
        targetColumn?: number | undefined;
    }) => void;
    addPresences: (newPresences: import("@fortune-sheet/core").Presence[]) => void;
    removePresences: (arr: {
        username: string;
        userId?: string | undefined;
    }[]) => void;
}>>;
export default Workbook;
