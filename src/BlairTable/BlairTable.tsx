import type { DataProps, ColumnProps } from "./types";
import { css } from "@emotion/css";
import Bottom from "./Bottom/Bottom";
import Top from "./Top/Top";
import { containerHeight, containerWidth, widthToAdd } from "./consts";
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

  // Maybe columns and data props have the same data structure?
  // Calculate the height of each row with the language and the valueType
  /*
   * const calculateHeight = (valueType, lng) => {}
   */

  // Get the width for the first column! (which is important for sticky feature)
  let labelLength = columns[0].title.length;

  data.forEach((d) => {
    if (d.name.length > labelLength) labelLength = d.name.length;

    d.items.forEach((item: any) => {
      if (item.name.length > labelLength) labelLength = item.name.length;
    });
  });

  const firstColumnWidth = labelLength + widthToAdd;

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
