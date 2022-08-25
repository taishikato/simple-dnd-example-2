import type { ColumnProps } from "../types";
import { css, cx } from "@emotion/css";
import { baseZIndex, rowLabelWidth, totalColLabelsWidth } from "../consts";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Top = ({ columns }: { columns: ColumnProps[] }) => (
  <div
    className={cx([
      css({
        position: "sticky",
        top: 0,
        zIndex: baseZIndex + 1,
      }),
      "clearfix",
    ])}
  >
    <div
      className={cx([
        css({
          display: "flex",
          clear: "both",
          width: rowLabelWidth + totalColLabelsWidth,
        }),
        "clearfix",
      ])}
    >
      {/*region TOP LEFT*/}
      <Left>{columns[0].title}</Left>
      {/*endregion*/}
      {/*region TOP RIGHT*/}
      <Right columns={columns} />
      {/*endregion*/}
    </div>
  </div>
);

export default Top;
