import type { DataProps, ColumnProps } from "./types";
import { css } from "@emotion/css";
import Bottom from "./Bottom/Bottom";
import Top from "./Top/Top";
import "./styles/style.css";

const CollapseTable2 = <T extends string>({
  columns,
  data,
  height,
  isHeaderSticky = false,
  isFirstColumnSticky = false,
}: {
  columns: ColumnProps<T>[];
  data: DataProps<T>[];
  height: number;
  isHeaderSticky?: boolean;
  isFirstColumnSticky?: boolean;
}) => {
  /**
   * Think of this component like a 2 x 2 grid:
   * - The top left is a blank space
   * - The top right is column labels which "stick" when vertical scrolling
   * - The bottom left is row labels which "stick" when horizontal scrolling
   * - The bottom right the row / col content cells
   */

  // Maybe columns and data props have the same data structure?
  // Calculate the height of each row with the language and the valueType
  /*
   * const calculateHeight = (valueType, lng) => {}
   */

  const tableWidth = columns.reduce((acc, column) => {
    acc += column.width;

    return acc;
  }, 0);

  return (
    <div
      className={css({
        height, // ! Need to set height here for a sticky header
        fontSize: "14px",
      })}
    >
      <Top
        columns={columns}
        tableWidth={tableWidth}
        isHeaderSticky={isHeaderSticky}
        isFirstColumnSticky={isFirstColumnSticky}
      />
      <Bottom
        columns={columns}
        data={data}
        tableWidth={tableWidth}
        isFirstColumnSticky={isFirstColumnSticky}
      />
    </div>
  );
};

export default CollapseTable2;
