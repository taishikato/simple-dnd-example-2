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
      className={css`
        position: relative;
      `}
    >
      {columns.map((column, index) => {
        if (index === 0)
          return (
            <FirstCell
              key={column.key}
              width={column.width}
              cellCSS={column.cellCSS}
              isFirstColumnSticky={isFirstColumnSticky}
            >
              {data.name}
            </FirstCell>
          );

        if (column.dataIndex == null) return;

        return (
          <Cell key={column.key} width={column.width} cellCSS={column.cellCSS}>
            {data.values[column.dataIndex]}
          </Cell>
        );
      })}
    </tr>
  );
};

export default Row;
