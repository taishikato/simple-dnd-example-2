import type { ColumnProps } from "../../../types";
import { css } from "@emotion/css";

const Cell = <T extends string>({
  children,
  column,
}: {
  children: JSX.Element | string | number;
  column: ColumnProps<T>;
}) => (
  <div
    className={css([
      {
        width: column.width,
        flexGrow: 0,
        flexShrink: 0,
        textAlign: "center",
        boxSizing: "border-box",
        padding: "10px 0",
        border: "1px solid #e2e2e2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      column.headerCellCSS && column.headerCellCSS,
    ])}
  >
    {children}
  </div>
);

export default Cell;