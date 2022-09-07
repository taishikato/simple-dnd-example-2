import type { ColumnProps, DataItemProps } from "../../../types";
import { cx, css } from "@emotion/css";
import Cell from "./Cell/Cell";

const Row = <T extends string>({
  columns,
  item,
  collapseName,
}: {
  columns: ColumnProps<T>[];
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
          if (column.renderCell)
            return (
              /**
               * Render a container div with a width prop,
               * so we don't have to set a width to our custom component that column.renderCell() method will return.
               */
              <div
                key={column.key}
                className={css({
                  width: column.width,
                  height: "100%",
                  boxSizing: "border-box",
                  "& > *": {
                    height: "100%",
                  },
                })}
              >
                {column.renderCell(item.values[column.dataIndex], item.values)}
              </div>
            );

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
