import { css } from "@emotion/css";
import { baseZIndex, rowLabelWidth } from "../../consts";

const Left = ({ children }: { children: JSX.Element | string | number }) => (
  <div
    className={css({
      left: "0",
      top: "0",
      position: "sticky",
      width: rowLabelWidth,
      float: "left",
      zIndex: baseZIndex,
      backgroundColor: "#ffffff",
      boxSizing: "border-box",
      padding: "5px 15px",
      border: "1px solid #e2e2e2",
    })}
  >
    {children}
  </div>
);

export default Left;
