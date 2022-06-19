import { Context } from "../context";
import { Rect } from "../types";
export declare const dropCellCache: Record<string, any>;
export declare function showDropCellSelection({ width, height, top, left }: Rect, container: HTMLDivElement): void;
export declare function hideDropCellSelection(container: HTMLDivElement): void;
export declare function createDropCellRange(ctx: Context, e: MouseEvent, container: HTMLDivElement): void;
export declare function onDropCellSelect(ctx: Context, e: MouseEvent, scrollX: HTMLDivElement, scrollY: HTMLDivElement, container: HTMLDivElement): void;
export declare function onDropCellSelectEnd(ctx: Context, e: MouseEvent, container: HTMLDivElement): void;
