import type { ColumnProps } from "../types";
import { css, cx } from "@emotion/css";
import { baseZIndex } from "../consts";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Top = <T extends string>({
  columns,
  tableWidth,
  isHeaderSticky,
  isFirstColumnSticky,
}: {
  columns: ColumnProps<T>[];
  tableWidth: number;
  isHeaderSticky: boolean;
  isFirstColumnSticky: boolean;
}) => (
  <div
    className={css([
      isHeaderSticky && {
        position: "sticky",
        top: 0,
        zIndex: baseZIndex + 1,
      },
    ])}
  >
    <div
      className={cx([
        css({
          display: "flex",
          width: tableWidth,
        }),
        "clearfix",
      ])}
    >
      {/*region TOP LEFT*/}
      <Left firstColumn={columns[0]} isFirstColumnSticky={isFirstColumnSticky}>
        {columns[0].title}
      </Left>
      {/*endregion*/}
      {/*region TOP RIGHT*/}
      <Right columns={columns} />
      {/*endregion*/}
    </div>
  </div>
);

export default Top;
