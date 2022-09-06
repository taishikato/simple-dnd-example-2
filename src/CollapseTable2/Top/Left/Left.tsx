import { css } from "@emotion/css";
import { ColumnProps } from "../../types";
import { baseZIndex } from "../../consts";

const Left = ({
  children,
  firstColumn,
  isFirstColumnSticky,
}: {
  children: JSX.Element | string | number;
  firstColumn: ColumnProps;
  isFirstColumnSticky: boolean;
}) => (
  <div
    className={css([
      {
        fontWeight: 600,
        flexBasis: firstColumn.width,
        flexGrow: 0,
        flexShrink: 0,
        float: "left",
        zIndex: baseZIndex,
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
        padding: "10px 15px",
        border: "1px solid #e2e2e2",
      },
      isFirstColumnSticky && {
        left: "0",
        top: "0",
        position: "sticky",
      },
    ])}
  >
    {children}
  </div>
);

export default Left;
