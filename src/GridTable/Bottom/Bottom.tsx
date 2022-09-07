import type { DataProps, ColumnProps } from "../types";
import { cx, css } from "@emotion/css";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Bottom = <T extends string>({
  columns,
  data,
  tableWidth,
  isFirstColumnSticky,
}: {
  columns: ColumnProps<T>[];
  data: DataProps<T>[];
  tableWidth: number;
  isFirstColumnSticky: boolean;
}) => {
  return (
    <div
      className={cx([
        css({
          width: tableWidth,
        }),
        "clearfix",
      ])}
    >
      {/*region BOTTOM LEFT*/}
      <Left
        data={data}
        firstColumn={columns[0]}
        isFirstColumnSticky={isFirstColumnSticky}
      />
      {/*endregion*/}
      {/*region BOTTOM RIGHT*/}
      <Right columns={columns} data={data} />
      {/*endregion*/}
    </div>
  );
};

export default Bottom;
