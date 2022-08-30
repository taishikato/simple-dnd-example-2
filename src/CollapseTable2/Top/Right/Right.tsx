import type { ColumnProps } from "../../types";
import { css } from "@emotion/css";
import { totalColLabelsWidth } from "../../consts";
import Cell from "./Cell/Cell";

const Right = ({ columns }: { columns: ColumnProps[] }) => (
  <div
    className={css({
      width: totalColLabelsWidth,
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
