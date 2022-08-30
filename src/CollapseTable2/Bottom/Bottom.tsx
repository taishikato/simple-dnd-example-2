import type { DataProps, ColumnProps } from "../types";
import { cx, css } from "@emotion/css";
import { rowLabelWidth, totalColLabelsWidth } from "../consts";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Bottom = <T extends string>({
  columns,
  data,
}: {
  columns: ColumnProps[];
  data: DataProps<T>[];
}) => {
  return (
    <div
      className={cx([
        css({
          clear: "both",
          width: rowLabelWidth + totalColLabelsWidth,
        }),
        "clearfix",
      ])}
    >
      {/*region BOTTOM LEFT*/}
      <Left data={data} firstColumn={columns[0]} />
      {/*endregion*/}
      {/*region BOTTOM RIGHT*/}
      <Right columns={columns} data={data} />
      {/*endregion*/}
    </div>
  );
};

export default Bottom;
