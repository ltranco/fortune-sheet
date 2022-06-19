import React from "react";
import { Context, Settings, GlobalCache, PatchOptions } from "@fortune-sheet/core";
declare type RefValues = {
    globalCache: GlobalCache;
    cellInput: React.MutableRefObject<HTMLDivElement | null>;
    fxInput: React.MutableRefObject<HTMLDivElement | null>;
    canvas: React.MutableRefObject<HTMLCanvasElement | null>;
    scrollbarX: React.MutableRefObject<HTMLDivElement | null>;
    scrollbarY: React.MutableRefObject<HTMLDivElement | null>;
    cellArea: React.MutableRefObject<HTMLDivElement | null>;
    workbookContainer: React.MutableRefObject<HTMLDivElement | null>;
};
export declare type SetContextOptions = {
    noHistory?: boolean;
    logPatch?: boolean;
} & PatchOptions;
declare const WorkbookContext: React.Context<{
    context: Context;
    setContext: (recipe: (ctx: Context) => void, options?: SetContextOptions | undefined) => void;
    settings: Required<Settings>;
    refs: RefValues;
    handleUndo: () => void;
    handleRedo: () => void;
}>;
export default WorkbookContext;
