import { Patch as ImmerPatch } from "immer";
import { PatchOptions } from "./utils";
export declare type Op = {
    op: "replace" | "remove" | "add" | "insertRowCol" | "deleteRowCol" | "addSheet" | "deleteSheet";
    id?: string;
    path: (string | number)[];
    value?: any;
};
export declare type Rect = {
    top: number;
    left: number;
    width: number;
    height: number;
};
export declare type CellStyle = {
    bl?: number;
    it?: number;
    ff?: number | string;
    fs?: number;
    fc?: string;
    ht?: number;
    vt?: number;
    tb?: string;
    cl?: number;
    un?: number;
    tr?: string;
};
export declare type Cell = {
    v?: string | number | boolean;
    m?: string | number;
    mc?: {
        r: number;
        c: number;
        rs?: number;
        cs?: number;
    };
    f?: string;
    ct?: {
        fa?: string;
        t?: string;
        s?: any;
    };
    qp?: number;
    spl?: any;
    bg?: string;
    lo?: number;
    rt?: number;
    ps?: {
        left: number | null;
        top: number | null;
        width: number | null;
        height: number | null;
        value: string;
        isShow: boolean;
    };
} & CellStyle;
export declare type CellWithRowAndCol = {
    r: number;
    c: number;
    v: Cell | null;
};
export declare type CellMatrix = (Cell | null)[][];
export declare type Selection = {
    left?: number;
    width?: number;
    top?: number;
    height?: number;
    left_move?: number;
    width_move?: number;
    top_move?: number;
    height_move?: number;
    row: number[];
    column: number[];
    row_focus?: number;
    column_focus?: number;
    moveXY?: {
        x: number;
        y: number;
    };
    row_select?: boolean;
    column_select?: boolean;
};
export declare type Presence = {
    sheetId: string;
    username: string;
    userId?: string;
    color: string;
    selection: {
        r: number;
        c: number;
    };
};
export declare type SheetConfig = {
    merge?: Record<string, {
        r: number;
        c: number;
        rs: number;
        cs: number;
    }>;
    rowlen?: Record<string, number>;
    columnlen?: Record<string, number>;
    rowhidden?: Record<string, number>;
    colhidden?: Record<string, number>;
    customHeight?: Record<string, number>;
    customWidth?: Record<string, number>;
    borderInfo?: any[];
    authority?: any;
    rowHeaderBgColor?: string;
    colHeaderBgColor?: string;
    rowHeaderTextColor?: string;
    colHeaderTextColor?: string;
};
export declare type Image = {
    id: string;
    width: number;
    height: number;
    left: number;
    top: number;
    src: string;
};
export declare type Sheet = {
    name: string;
    config?: SheetConfig;
    order?: number;
    data?: CellMatrix;
    celldata?: CellWithRowAndCol[];
    id?: string;
    images?: Image[];
    zoomRatio?: number;
    column?: number;
    row?: number;
    status?: number;
    luckysheet_select_save?: Selection[];
    luckysheet_selection_range?: {
        row: number[];
        column: number[];
    }[];
    calcChain?: any[];
    defaultRowHeight?: number;
    defaultColWidth?: number;
    showGridLines?: boolean | number;
    pivotTable?: any;
    isPivotTable?: boolean;
    filter?: any[];
    filter_select?: any;
    luckysheet_conditionformat_save?: any[];
    luckysheet_alternateformat_save?: any[];
    dataVerification?: any;
    hyperlink?: any;
    dynamicArray_compute?: any;
    dynamicArray?: any[];
    frozen?: {
        type: "row" | "column" | "both" | "rangeRow" | "rangeColumn" | "rangeBoth";
        range?: {
            row_focus: number;
            column_focus: number;
        };
    };
};
export declare type CommentBox = {
    r: number;
    c: number;
    rc: string;
    autoFocus: boolean;
    value: string;
    size: {
        fromX: number;
        fromY: number;
        toX: number;
        toY: number;
    } & Rect;
} & Rect;
export declare type History = {
    patches: ImmerPatch[];
    inversePatches: ImmerPatch[];
    options?: PatchOptions;
};
export declare type Freezen = {
    horizontal?: {
        freezenhorizontaldata: any[];
        top: number;
    };
    vertical?: {
        freezenverticaldata: any[];
        left: number;
    };
};
export declare type GlobalCache = {
    overwriteCell?: boolean;
    doNotFocus?: boolean;
    doNotUpdateCell?: boolean;
    recentTextColor?: string;
    recentBackgroundColor?: string;
    visibleColumnsUnique?: number[];
    visibleRowsUnique?: number[];
    undoList: History[];
    redoList: History[];
    editingCommentBoxEle?: HTMLDivElement;
    freezen?: Record<string, Freezen>;
    image?: {
        imgInitialPosition: Rect | undefined;
        cursorMoveStartPosition: {
            x: number;
            y: number;
        } | undefined;
        resizingSide: string | undefined;
    };
    commentBox?: {
        movingId: string | undefined;
        resizingId: string | undefined;
        resizingSide: string | undefined;
        commentRC: {
            r: number;
            c: number;
            rc: string;
        };
        boxInitialPosition: Rect | undefined;
        cursorMoveStartPosition: {
            x: number;
            y: number;
        } | undefined;
    };
    touchMoveStatus?: boolean;
    touchHandleStatus?: boolean;
    touchMoveStartPos?: {
        x: number;
        y: number;
        vy: number;
        moveType: string;
        vy_x?: number;
        vy_y?: number;
        scrollTop?: number;
        scrollLeft?: number;
    };
};
export declare type SingleRange = {
    row: number[];
    column: number[];
};
export declare type Range = SingleRange[];
