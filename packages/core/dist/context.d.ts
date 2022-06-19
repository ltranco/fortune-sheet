import { SheetConfig } from ".";
import { FormulaCache } from "./modules";
import { Hooks } from "./settings";
import { Sheet, Selection, Cell, CommentBox, Rect, Image, Presence } from "./types";
export declare type Context = {
    luckysheetfile: Sheet[];
    defaultcolumnNum: number;
    defaultrowNum: number;
    fullscreenmode: boolean;
    devicePixelRatio: number;
    commentBoxes?: CommentBox[];
    editingCommentBox?: CommentBox;
    hoveredCommentBox?: CommentBox;
    insertedImgs?: Image[];
    editingInsertedImgs?: Image;
    activeImg?: Image;
    presences?: Presence[];
    contextMenu: any;
    sheetTabContextMenu: {
        x?: number;
        y?: number;
        sheet?: Sheet;
        onRename?: () => void;
    };
    currentSheetId: string;
    calculateSheetId: string;
    config: SheetConfig;
    visibledatarow: number[];
    visibledatacolumn: number[];
    ch_width: number;
    rh_height: number;
    cellmainWidth: number;
    cellmainHeight: number;
    toolbarHeight: number;
    infobarHeight: number;
    calculatebarHeight: number;
    rowHeaderWidth: number;
    columnHeaderHeight: number;
    cellMainSrollBarSize: number;
    sheetBarHeight: number;
    statisticBarHeight: number;
    luckysheetTableContentHW: number[];
    defaultcollen: number;
    defaultrowlen: number;
    scrollLeft: number;
    scrollTop: number;
    luckysheet_select_status: boolean;
    luckysheet_select_save: Sheet["luckysheet_select_save"];
    luckysheet_selection_range: Sheet["luckysheet_selection_range"];
    formulaRangeHighlight: ({
        rangeIndex: number;
        backgroundColor: string;
    } & Rect)[];
    formulaRangeSelect: ({
        rangeIndex: number;
    } & Rect) | undefined;
    functionCandidates: any[];
    functionHint: string | null | undefined;
    luckysheet_copy_save?: {
        dataSheetId: string;
        copyRange: {
            row: number[];
            column: number[];
        }[];
        RowlChange: boolean;
        HasMC: boolean;
    };
    luckysheet_paste_iscut: boolean;
    filterchage: boolean;
    luckysheet_filter_save: {
        row: any[];
        column: any[];
    };
    luckysheet_sheet_move_status: boolean;
    luckysheet_sheet_move_data: any[];
    luckysheet_scroll_status: boolean;
    luckysheetcurrentisPivotTable: boolean;
    luckysheet_rows_selected_status: boolean;
    luckysheet_cols_selected_status: boolean;
    luckysheet_rows_change_size: boolean;
    luckysheet_rows_change_size_start: any[];
    luckysheet_cols_change_size: boolean;
    luckysheet_cols_change_size_start: any[];
    luckysheetCellUpdate: any[];
    luckysheet_shiftkeydown: boolean;
    luckysheet_shiftpositon: Selection | undefined;
    iscopyself: boolean;
    orderbyindex: number;
    luckysheet_model_move_state: boolean;
    luckysheet_model_xy: number[];
    luckysheet_model_move_obj: any;
    luckysheet_cell_selected_move: boolean;
    luckysheet_cell_selected_move_index: any[];
    luckysheet_cell_selected_extend: boolean;
    luckysheet_cell_selected_extend_index: any[];
    lang: string | null;
    chart_selection: any;
    zoomRatio: number;
    showGridLines: boolean;
    allowEdit: boolean;
    fontList: any[];
    defaultFontSize: number;
    luckysheetPaintModelOn: boolean;
    luckysheetPaintSingle: boolean;
    defaultCell: Cell;
    groupValuesRefreshData: any[];
    formulaCache: FormulaCache;
    hooks: Hooks;
};
export declare function defaultContext(): Context;
export declare function getFlowdata(ctx?: Context): import("./types").CellMatrix | null | undefined;
export declare function ensureSheetIndex(data: Sheet[], generateSheetId: () => string): void;
export declare function initSheetIndex(ctx: Context): void;
export declare function updateContextWithSheetData(ctx: Context, data: any[][]): void;
export declare function updateContextWithCanvas(ctx: Context, canvas: HTMLCanvasElement, placeholder: HTMLDivElement): void;
