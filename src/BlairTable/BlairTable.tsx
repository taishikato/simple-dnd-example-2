import type { DataProps, ColumnProps } from "./types";
import { css } from "@emotion/css";
import Bottom from "./Bottom/Bottom";
import Top from "./Top/Top";
import { containerHeight, containerWidth } from "./consts";
import "./styles/style.css";

const BlairTable = <T extends string>({
  columns,
  data,
}: {
  columns: ColumnProps[];
  data: DataProps<T>[];
}) => {
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
        fontSize: "14px",
      })}
    >
      <Top columns={columns} />
      <Bottom columns={columns} data={data} />
    </div>
  );
};

export default BlairTable;
