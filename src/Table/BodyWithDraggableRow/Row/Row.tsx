import { css } from "@emotion/css";
import FirstCell from "../../BodyCells/FirstCell/FirstCell";
import Cell from "../../BodyCells/Cell/Cell";
import type { ColumnProps, DataProps, DnDSortResult } from "../../types";

const Row = <T extends string>({
  data,
  columns,
  isFirstColumnSticky,
}: {
  data: DnDSortResult<DataProps<T>>;
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
}) => (
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
            cellCSS={column.cellCSS}
            isFirstColumnSticky={isFirstColumnSticky}
          >
            {data.value.name}
          </FirstCell>
        );

      if (column.dataIndex == null) return;

      return (
        <Cell key={column.key} width={column.width} cellCSS={column.cellCSS}>
          {data.value.values[column.dataIndex]}
        </Cell>
      );
    })}
  </tr>
);

export default Row;
