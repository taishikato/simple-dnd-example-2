import type { ColumnProps } from "../types";
import { css, cx } from "@emotion/css";
import { baseZIndex } from "../consts";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Top = ({
  columns,
  tableWidth,
}: {
  columns: ColumnProps[];
  tableWidth: number;
}) => (
  <div
    className={cx([
      css({
        position: "sticky",
        top: 0,
        zIndex: baseZIndex + 1,
      }),
    ])}
  >
    <div
      className={cx([
        css({
          display: "flex",
          clear: "both",
          width: tableWidth,
        }),
        "clearfix",
      ])}
    >
      {/*region TOP LEFT*/}
      <Left firstColumn={columns[0]}>{columns[0].title}</Left>
      {/*endregion*/}
      {/*region TOP RIGHT*/}
      <Right columns={columns} />
      {/*endregion*/}
    </div>
  </div>
);

export default Top;
