import { css } from "@emotion/css";
import Header from "./Header/Header";
import BodyWithDraggableRow from "./BodyWithDraggableRow/BodyWithDraggableRow";
import type { ColumnProps, DataProps } from "../types";
import Body from "./Body/Body";

const Table = <T extends string>({
  data,
  columns,
  isFirstColumnSticky,
  isHeaderSticky,
  isDraggable = false,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
  isHeaderSticky: boolean;
  isDraggable?: boolean;
}) => {
  return (
    <table
      className={css`
        border-collapse: separate;
        border-spacing: 0px 0px;
        width: 100%;
      `}
    >
      <Header
        columns={columns}
        isFirstColumnSticky={isFirstColumnSticky}
        isHeaderSticky={isHeaderSticky}
      />
      {isDraggable ? (
        <BodyWithDraggableRow
          data={data}
          columns={columns}
          isFirstColumnSticky={isFirstColumnSticky}
        />
      ) : (
        <Body<T>
          data={data}
          isFirstColumnSticky={isFirstColumnSticky}
          columns={columns}
        />
      )}
    </table>
  );
};

export default Table;
