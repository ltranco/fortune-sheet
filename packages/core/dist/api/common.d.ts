import { Context } from "../context";
export declare type CommonOptions = {
    index?: number;
    id?: string;
};
export declare function getSheet(ctx: Context, options?: CommonOptions): import("..").Sheet;
