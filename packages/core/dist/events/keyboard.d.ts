import { Context } from "../context";
import { GlobalCache } from "../types";
export declare function handleGlobalEnter(ctx: Context, cellInput: HTMLDivElement, e: KeyboardEvent): void;
export declare function handleWithCtrlOrMetaKey(ctx: Context, e: KeyboardEvent, cellInput: HTMLDivElement, fxInput: HTMLDivElement, handleUndo: () => void, handleRedo: () => void): void;
export declare function handleArrowKey(ctx: Context, e: KeyboardEvent): void;
export declare function handleGlobalKeyDown(ctx: Context, cellInput: HTMLDivElement, fxInput: HTMLDivElement, e: KeyboardEvent, cache: GlobalCache, handleUndo: () => void, handleRedo: () => void): void;
