import { Workbook, WorkbookInstance } from "ltranco-fortune-sheet-react";
import "ltranco-fortune-sheet-react/dist/index.css";


const htmlToElement = (html: string) => {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild as HTMLTableElement;
};

const Spreadsheet = () => {
    const colors = {
        border: "#d3d3d3",
    }
  const primaryBg = "gray";
  const secondaryBg = "green";
  const primaryTextColor = "red";
  const secondaryTextColor = "yellow";
  const defaultCellBgColor = "purple";

  const COMMON_CELL_STYLE = {
    bg: primaryBg,
    fc: primaryTextColor,
  };

  const ROWS = [
        {label: "Row header 1"}, 
        {label: "Row header 2"}, 
        {label: "Row header 3"}, 
        {label: "Row header 4"}, 
        {label: "Row header 5"}, 
        {label: "Row header 6"}, 
        {label: "Row header 7"}, 
        {label: "Row header 8"}, 
        {label: "Row header 9"}, 
        {label: "Row header 10"}, 
    ].map((row, idx) => ({
    r: idx + 1,
    c: 0,
    v: {
      v: `${row.label}   `,
      ht: "2",
      ...COMMON_CELL_STYLE,
    },
  }));

  const COLS = [
        {label: "Col header 1"}, 
        {label: "Col header 2"}, 
        {label: "Col header 3"}, 
        {label: "Col header 4"}, 
        {label: "Col header 5"}, 
        {label: "Col header 6"}, 
        {label: "Col header 7"}, 
        {label: "Col header 8"}, 
        {label: "Col header 9"}, 
        {label: "Col header 10"}, 
    ].map((col, idx) => ({
    r: 0,
    c: idx + 1,
    v: {
      v: col.label,
      ht: "0", // center aligned
      ...COMMON_CELL_STYLE,
    },
  }));

  const workbookSettings = {
    language: "en",
    showToolbar: false,
    showSheetTabs: false,
    showFormulaBar: false,
    cellContextMenu: ["copy", "paste"],
    row: ROWS.length,
    column: COLS.length,
  };

  const cellDataMap: Record<string, string | number | undefined> = {};
  [].forEach(({ row, col, value }) => {
    cellDataMap[`${row}-${col}`] = value;
  });
  const normalCells = [];
  for (let r = 1; r <= ROWS.length; r++) {
    for (let c = 1; c <= COLS.length; c++) {
      normalCells.push({
        r,
        c,
        v: {
          v: cellDataMap[`${r}-${c}`],
          ...COMMON_CELL_STYLE,
        },
      });
    }
  }

  return (
    <div
        style={{
            background: primaryBg,
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            height: '400px',
        }}
    >
      <div
        style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: '-18px',
            left: '-43px',
        }}
      >
        <Workbook
          data={[
            {
              name: "Sheet1",
              celldata: [
                { r: 0, c: 0, v: { ...COMMON_CELL_STYLE } },
                ...COLS,
                ...ROWS,
                ...normalCells,
              ],
              config: {
                columnlen: {
                  0: 120,
                },
                borderInfo: [
                  {
                    rangeType: "range",
                    borderType: "border-inside",
                    style: 1,
                    color: colors["border"],
                    range: [
                      {
                        row: [1, 1000],
                        column: [1, 1000],
                      },
                    ],
                  },
                  {
                    rangeType: "range",
                    borderType: "border-bottom",
                    style: 1,
                    color: colors["border"],
                    range: [
                      {
                        row: [ROWS.length, 1000],
                        column: [1, 1000],
                      },
                    ],
                  },
                  {
                    rangeType: "range",
                    borderType: "border-right",
                    style: 1,
                    color: colors["border"],
                    range: [
                      {
                        row: [1, 1000],
                        column: [COLS.length, 1000],
                      },
                    ],
                  },
                  {
                    rangeType: "range",
                    borderType: "border-left",
                    style: 1,
                    color: colors["border"],
                    range: [
                      {
                        row: [1, 1000],
                        column: [1, 1],
                      },
                    ],
                  },
                  {
                    rangeType: "range",
                    borderType: "border-top",
                    style: 1,
                    color: colors["border"],
                    range: [
                      {
                        row: [1, 1],
                        column: [1, 1000],
                      },
                    ],
                  },
                ],
                colHeaderHidden: true,
                colHeaderBgColor: secondaryBg,
                colHeaderTextColor: secondaryTextColor,
                colHeaderBorderColor: colors["border"],
                rowHeaderHidden: true,
                rowHeaderBgColor: secondaryBg,
                rowHeaderTextColor: secondaryTextColor,
                rowHeaderBorderColor: colors["border"],
                defaultCellBgColor,
              },
              showGridLines: false,
              defaultRowHeight: 30,
            },
          ]}
          {...workbookSettings}
          hooks={{
            beforeRenderRowHeaderCell: (
              rowNumber: string,
              rowIndex: number,
              top: number,
              width: number,
              height: number,
              ctx: CanvasRenderingContext2D
            ) => false,
            beforeRenderColumnHeaderCell: (
              columnChar: string,
              columnIndex: number,
              left: number,
              width: number,
              height: number,
              ctx: CanvasRenderingContext2D
            ) => false,
            beforeUpdateCell: (r: number, c: number, value: any) => {
              console.log(`before update ${value}`);
              if (r === 0 || c === 0) {
                return false;
              }
              return true;
            },
            beforePaste: (selections, content) => {
                console.log('wtf');
              console.log(content);
              const isFromExcel = content.startsWith(
                '<html xmlns:v="urn:schemas-microsoft-com:vml"'
              );
              if (content.startsWith("<meta charset")) {
                return content;
              } else if (isFromExcel) {
                const match = content.match(/<table[^>]*>([\s\S]*?)<\/table>/g);
                if (match && match?.length > 0) {
                  content = match[0];
                }
              }

              console.log(content);
              const tableNode = htmlToElement(`${content}`);
              const trNodes = tableNode.querySelectorAll("tr");
              const rows = Array.from(trNodes).map((trNode) => {
                const tdNodes = trNode.querySelectorAll("td");
                const tdValues = Array.from(tdNodes)
                  .map((tdNode) => tdNode.innerText)
                  .map(
                    (tdValue) =>
                      `<td style="color: ${primaryTextColor}; background: ${defaultCellBgColor};">${tdValue}</td>`
                  );
                return `<tr>${tdValues.join("")}</tr>`;
              });
              const table = `<table><tbody>${rows.join("")}</tbody></table>`;

              return table;
            },
          }}
        />
      </div>
    </div>
  );
};

export default Spreadsheet;
