import { css } from "@emotion/css";
import { ColumnProps } from "../../../../types";

const Cell = <T extends string>({
  children,
  column,
}: {
  children: JSX.Element | number | string;
  column: ColumnProps<T>;
}) => (
  <div
    className={css([
      {
        width: column.width,
        height: "100%",
        borderBottom: "1px solid #e2e2e2",
        borderRight: "1px solid #e2e2e2",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        wordBreak: "break-all",
        padding: "8px",
      },
      column.cellCSS && column.cellCSS,
    ])}
  >
    {children}
  </div>
);

export default Cell;
