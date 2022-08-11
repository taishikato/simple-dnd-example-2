import { css } from "@emotion/css";
import FirstCell from "./FirstCell/FirstCell";
import Cell from "./Cell/Cell";
import type { ColumnProps } from "../../../types";

const Row = ({ data, columns }: { data: any; columns: ColumnProps[] }) => {
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
              {...(column.width && { width: column.width })}
              {...(column.customClass &&
                column.customClass.length > 0 && {
                  customClass: column.customClass,
                })}
            >
              {data.value.name}
            </FirstCell>
          );

        if (column.dataIndex == null) return;

        return (
          <Cell
            key={column.key}
            {...(column.width && { width: column.width })}
            {...(column.customClass &&
              column.customClass.length > 0 && {
                customClass: column.customClass,
              })}
          >
            {data.value.values[column.dataIndex]}
          </Cell>
        );
      })}
    </tr>
  );
};

export default Row;
