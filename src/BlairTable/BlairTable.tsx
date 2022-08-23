import { css } from "@emotion/css";
import Bottom from "./Bottom/Bottom";
import Top from "./Top/Top";

const BlairTable = () => {
  /**
   * Think of this component like a 2 x 2 grid:
   * - The top left is a blank space
   * - The top right is column labels which "stick" when vertical scrolling
   * - The bottom left is row labels which "stick" when horizontal scrolling
   * - The bottom right the row / col content cells
   */

  const rowLabelWidth = 180;
  const numberOfCols = 30;
  const numberOfRows = 300;

  const cols = Array.from({ length: numberOfCols }, (_, i) => ({
    text: `col ${i + 1}`,
    width: 100, // i % 2 === 0 ? 300 : 150,
  }));

  const rows = Array.from({ length: numberOfRows }, (_, i) => ({
    text: `row ${i + 1}`,
    height: i % 5 === 0 ? 30 : 100,
  }));

  const totalColLabelsWidth = cols.reduce((a, b) => a + b.width, 0);
  const baseZIndex = 1;
  const containerWidth = 500;
  const containerHeight = 300;

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
