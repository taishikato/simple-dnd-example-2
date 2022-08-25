import type { ColumnProps, DataItemProps } from "../../../types";
import { cx, css } from "@emotion/css";
import Cell from "./Cell/Cell";

const Row = <T extends string>({
  columns,
  item,
  collapseName,
}: {
  columns: ColumnProps[];
  item: DataItemProps<T>;
  collapseName: string;
}) => {
  return (
    <div
      className={cx([
        css({
          height: 100,
          display: "flex",
          transition: "height 200ms, opacity 200ms",
        }),
        `collapse-${collapseName}`,
      ])}
    >
      {columns.map((c, i: number) => {
        if (i !== 0)
          return (
            <Cell key={c.key} column={c}>
              {item.values[c.dataIndex]}
            </Cell>
          );
      })}
    </div>
  );
};

export default Row;
