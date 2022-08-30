import type { DataProps, ColumnProps } from "../types";
import { cx, css } from "@emotion/css";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Bottom = <T extends string>({
  columns,
  data,
  tableWidth,
}: {
  columns: ColumnProps[];
  data: DataProps<T>[];
  tableWidth: number;
}) => {
  return (
    <div
      className={cx([
        css({
          clear: "both",
          width: tableWidth,
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
