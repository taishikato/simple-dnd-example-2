import { css } from "@emotion/css";
import FirstCell from "./FirstCell/FirstCell";
import Cell from "./Cell/Cell";
import type { ColumnProps } from "../../../types";

const Row = ({ item, columns }: { item: any; columns: ColumnProps[] }) => {
  return (
    <tr
      {...item.events}
      className={css`
        cursor: grab;
        position: relative;
        touch-action: none;
      `}
    >
      {columns.map((column, index) => {
        if (index === 0) return <FirstCell>{item.value.name}</FirstCell>;

        if (column.dataIndex == null) return;

        return <Cell>{item.value.values[column.dataIndex]}</Cell>;
      })}
    </tr>
  );
};

export default Row;
