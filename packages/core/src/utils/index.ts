import _ from "lodash";
import { Context } from "../context";
import { locale } from "../locale";
import { Sheet, Range, Selection } from "../types";

export * from "./patch";

export function generateRandomSheetName(
  file: Sheet[],
  isPivotTable: boolean,
  ctx: Context
) {
  let index = file.length;

  const locale_pivotTable = locale(ctx).pivotTable;
  const { title } = locale_pivotTable;

  for (let i = 0; i < file.length; i += 1) {
    if (
      file[i].name.indexOf("Sheet") > -1 ||
      file[i].name.indexOf(title) > -1
    ) {
      const suffix = parseFloat(
        file[i].name.replace("Sheet", "").replace(title, "")
      );

      if (!Number.isNaN(suffix) && Math.ceil(suffix) > index) {
        index = Math.ceil(suffix);
      }
    }
  }

  if (isPivotTable) {
    return title + (index + 1);
  }
  return `Sheet${index + 1}`;
}

// 颜色 rgb转16进制
export function rgbToHex(color: string): string {
  let rgb;

  if (color.indexOf("rgba") > -1) {
    rgb = color.replace("rgba(", "").replace(")", "").split(",");
  } else {
    rgb = color.replace("rgb(", "").replace(")", "").split(",");
  }

  const r = Number(rgb[0]);
  const g = Number(rgb[1]);
  const b = Number(rgb[2]);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// 列下标  数字转字母
export function indexToColumnChar(n: number) {
  const orda = "a".charCodeAt(0);
  const ordz = "z".charCodeAt(0);
  const len = ordz - orda + 1;
  let s = "";
  while (n >= 0) {
    s = String.fromCharCode((n % len) + orda) + s;
    n = Math.floor(n / len) - 1;
  }
  return s.toUpperCase();
}

// 列下标  字母转数字
export function columnCharToIndex(a: string) {
  if (a == null || a.length === 0) {
    return NaN;
  }
  const str = a.toLowerCase().split("");
  const al = str.length;
  const getCharNumber = (charx: string) => {
    return charx.charCodeAt(0) - 96;
  };
  let numout = 0;
  let charnum = 0;
  for (let i = 0; i < al; i += 1) {
    charnum = getCharNumber(str[i]);
    numout += charnum * 26 ** (al - i - 1);
  }
  // console.log(a, numout-1);
  if (numout === 0) {
    return NaN;
  }
  return numout - 1;
}

export function escapeScriptTag(str: string) {
  if (typeof str !== "string") return str;
  return str
    .replace(/<script>/g, "&lt;script&gt;")
    .replace(/<\/script>/, "&lt;/script&gt;");
}

export function getSheetIndex(ctx: Context, id: string) {
  for (let i = 0; i < ctx.luckysheetfile.length; i += 1) {
    if (ctx.luckysheetfile[i].id?.toString() === id.toString()) {
      return i;
    }
  }
  return null;
}

export function getSheetByIndex(ctx: Context, id: string) {
  if (_.isNil(id)) {
    id = ctx.currentSheetId;
  }
  const i = getSheetIndex(ctx, id);
  if (_.isNil(i)) {
    return null;
  }
  return ctx.luckysheetfile[i];
}

// 获取当前日期时间
export function getNowDateTime(format: number) {
  const now = new Date();
  const year = now.getFullYear(); // 得到年份
  let month: string | number = now.getMonth(); // 得到月份
  let date: string | number = now.getDate(); // 得到日期
  let hour: string | number = now.getHours(); // 得到小时
  let minu: string | number = now.getMinutes(); // 得到分钟
  let sec: string | number = now.getSeconds(); // 得到秒

  month += 1;
  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  if (hour < 10) hour = `0${hour}`;
  if (minu < 10) minu = `0${minu}`;
  if (sec < 10) sec = `0${sec}`;

  let time = "";

  // 日期
  if (format === 1) {
    time = `${year}-${month}-${date}`;
  }
  // 日期时间
  else if (format === 2) {
    time = `${year}-${month}-${date} ${hour}:${minu}:${sec}`;
  }

  return time;
}

// 替换temp中的${xxx}为指定内容 ,temp:字符串，这里指html代码，dataarry：一个对象{"xxx":"替换的内容"}
// 例：luckysheet.replaceHtml("${image}",{"image":"abc","jskdjslf":"abc"})   ==>  abc
export function replaceHtml(temp: string, dataarry: any) {
  return temp.replace(/\$\{([\w]+)\}/g, (s1, s2) => {
    const s = dataarry[s2];
    if (typeof s !== "undefined") {
      return s;
    }
    return s1;
  });
}

export function isCellInRange(
  rowIndex: number,
  colIndex: number,
  inputRange: Range
): boolean {
  return (
    inputRange.find((range) => {
      const [row1, row2] = range.row;
      const [col1, col2] = range.column;

      return (
        rowIndex >= row1 &&
        rowIndex <= row2 &&
        colIndex >= col1 &&
        colIndex <= col2
      );
    }) !== undefined
  );
}

export function referencedSelectionFromKeyboardInContext(
  ctx: Context
): Selection {
  const last =
    ctx.luckysheet_select_save![ctx.luckysheet_select_save!.length - 1];

  return last;
}

export function referencedCellFromKeyboardInContext(
  ctx: Context
): (number | undefined)[] {
  const last = referencedSelectionFromKeyboardInContext(ctx);
  const row_index = last.row_focus;
  const col_index = last.column_focus;
  return [row_index, col_index];
}

export function rectanglesIntersect(
  minAx: number,
  minAy: number,
  maxAx: number,
  maxAy: number,
  minBx: number,
  minBy: number,
  maxBx: number,
  maxBy: number
) {
  const aLeftOfB = maxAx < minBx;
  const aRightOfB = minAx > maxBx;
  const aAboveB = minAy > maxBy;
  const aBelowB = maxAy < minBy;

  return !(aLeftOfB || aRightOfB || aAboveB || aBelowB);
}

export const shouldDisablePasteOnSingleSelection = (ctx: Context): boolean => {
  const selection = referencedSelectionFromKeyboardInContext(ctx);
  const [r1, r2] = selection.row;
  const [c1, c2] = selection.column;

  const isSingleCell = r1 === r2 && c1 === c2;
  if (isSingleCell) {
    const overlap = ctx.luckysheet_select_save?.find((range) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [r, rr] = range.row;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [c, cc] = range.column;

      return isCellInRange(r, c, ctx.config.disabledCells || []);
    });

    return overlap !== undefined;
  }

  return false;
};
