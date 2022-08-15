import { css } from "@emotion/css";
import Header from "./Header/Header";
import type { ColumnProps, DataProps } from "./types";
import { DraggableStatusContextProvider } from "./context/DraggableStatusContext";
import Body from "./Body/Body";

const Table = <T extends string>({
  data,
  columns,
  isFirstColumnSticky = false,
  isHeaderSticky = false,
  isDraggable = false,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
  isFirstColumnSticky?: boolean;
  isHeaderSticky?: boolean;
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
        <Body
          data={data}
          columns={columns}
          isFirstColumnSticky={isFirstColumnSticky}
        />
      </table>
    </DraggableStatusContextProvider>
  );
};

export default Table;
