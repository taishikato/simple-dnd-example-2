import { css } from "@emotion/css";
import { ColumnProps } from "../../../CollapseTable/types";
import { baseZIndex, rowLabelWidth } from "../../consts";

const Left = ({
  children,
  firstColumn,
}: {
  children: JSX.Element | string | number;
  firstColumn: ColumnProps;
}) => (
  <div
    className={css({
      left: "0",
      top: "0",
      position: "sticky",
      flexBasis: firstColumn.width,
      flexGrow: 0,
      flexShrink: 0,
      float: "left",
      zIndex: baseZIndex,
      backgroundColor: "#ffffff",
      boxSizing: "border-box",
      padding: "10px 15px",
      border: "1px solid #e2e2e2",
    })}
  >
    {children}
  </div>
);

export default Left;
