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
          height: item.height,
          display: "flex",
          transition: "height 200ms, opacity 200ms",
        }),
        `collapse-${collapseName}`,
      ])}
    >
      {columns.map((column, i: number) => {
        // No need to render a Cell when i === 0 bc it should be rendered on Bottom left body.
        if (i !== 0) {
          if (column.renderCell) return column.renderCell();

          return (
            <Cell key={column.key} column={column}>
              {item.values[column.dataIndex]}
            </Cell>
          );
        }
      })}
    </div>
  );
};

export default Row;
