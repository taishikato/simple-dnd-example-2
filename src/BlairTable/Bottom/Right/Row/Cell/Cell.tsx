import { css } from "@emotion/css";
import { ColumnProps } from "../../../../types";

const Cell = ({
  children,
  column,
}: {
  children: JSX.Element | number | string;
  column: ColumnProps;
}) => {
  return (
    <div
      className={css({
        width: column.width,
        borderBottom: "1px solid #e2e2e2",
        borderRight: "1px solid #e2e2e2",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        wordBreak: "break-all",
        padding: "8px",
      })}
    >
      {children}
    </div>
  );
};

export default Cell;
