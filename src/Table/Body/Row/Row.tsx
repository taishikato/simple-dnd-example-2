import { css } from "@emotion/css";
import FirstCell from "./FirstCell/FirstCell";
import Cell from "./Cell/Cell";
import type { ColumnProps } from "../../../types";

const Row = ({
  data,
  columns,
  isFirstColumnSticky,
}: {
  data: any;
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
}) => {
  return (
    <tr
      {...data.events}
      className={css`
        cursor: grab;
        position: relative;
        touch-action: none;
      `}
    >
      {columns.map((column, index) => {
        if (index === 0)
          return (
            <FirstCell
              key={column.key}
              width={column.width}
              customClasses={column.customClasses}
              isFirstColumnSticky={isFirstColumnSticky}
            >
              {data.value.name}
            </FirstCell>
          );

        if (column.dataIndex == null) return;

        return (
          <Cell
            key={column.key}
            width={column.width}
            customClasses={column.customClasses}
          >
            {data.value.values[column.dataIndex]}
          </Cell>
        );
      })}
    </tr>
  );
};

export default Row;
