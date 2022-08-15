import { css } from "@emotion/css";
import Header from "./Header/Header";
import BodyWithDraggableRow from "./BodyWithDraggableRow/BodyWithDraggableRow";
import BodyWithNonDraggableRow from "./BodyWithNonDraggableRow/BodyWithNonDraggableRow";
import type { ColumnProps, DataProps } from "./types";
import { DraggableStatusContextProvider } from "./context/DraggableStatusContext";

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
    <DraggableStatusContextProvider value={isDraggable}>
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
          <BodyWithNonDraggableRow<T>
            data={data}
            isFirstColumnSticky={isFirstColumnSticky}
            columns={columns}
          />
        )}
      </table>
    </DraggableStatusContextProvider>
  );
};

export default Table;
