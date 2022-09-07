import type { ColumnProps } from "../../types";
import { css } from "@emotion/css";
import Cell from "./Cell/Cell";

const Right = <T extends string>({
  columns,
}: {
  columns: ColumnProps<T>[];
}) => (
  <div
    className={css({
      float: "left",
      backgroundColor: "#ffffff",
      boxSizing: "border-box",
      display: "flex",
    })}
  >
    <div className={css({ display: "flex" })}>
      {columns.map((columns, i: number) => {
        if (i !== 0)
          return (
            <Cell key={columns.key} column={columns}>
              {columns.title}
            </Cell>
          );
      })}
    </div>
  </div>
);

export default Right;
