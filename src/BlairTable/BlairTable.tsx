import { css } from "@emotion/css";
import Bottom from "./Bottom/Bottom";
import Top from "./Top/Top";
import { containerHeight, containerWidth } from "./consts";

const BlairTable = () => {
  /**
   * Think of this component like a 2 x 2 grid:
   * - The top left is a blank space
   * - The top right is column labels which "stick" when vertical scrolling
   * - The bottom left is row labels which "stick" when horizontal scrolling
   * - The bottom right the row / col content cells
   */

  return (
    <div
      className={css({
        width: containerWidth,
        height: containerHeight,
        overflow: "auto",
      })}
    >
      <Top />
      <Bottom />
    </div>
  );
};

export default BlairTable;
