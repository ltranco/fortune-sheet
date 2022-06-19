import { Context } from "..";
import { Settings } from "../settings";
import { CommonOptions } from "./common";
export declare function addSheet(ctx: Context, settings: Required<Settings>): void;
export declare function deleteSheet(ctx: Context, options?: CommonOptions): void;
export declare function activateSheet(ctx: Context, options?: CommonOptions): void;
export declare function setSheetName(ctx: Context, name: string, options?: CommonOptions): void;
export declare function setSheetOrder(ctx: Context, orderList: Record<string, number>): void;
export declare function scroll(ctx: Context, scrollbarX: HTMLDivElement | null, scrollbarY: HTMLDivElement | null, options: {
    scrollLeft?: number;
    scrollTop?: number;
    targetRow?: number;
    targetColumn?: number;
}): void;
