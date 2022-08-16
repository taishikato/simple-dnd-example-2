import { css } from "@emotion/css";
import { DraggableStatusContextProvider } from "./context/DraggableStatusContext";
import { StickyStatusContextProvider } from "./context/StickyStatusContext";
import Body from "./Body/Body";
import Header from "./Header/Header";
import type { ColumnProps, DataProps } from "./types";

const Table = <T extends string>({
  data,
  columns,
  isHeaderSticky = false,
  isFirstColumnSticky = false,
  isDraggable = false,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
  isHeaderSticky?: boolean;
  isFirstColumnSticky?: boolean;
  isDraggable?: boolean;
}) => (
  <DraggableStatusContextProvider value={isDraggable}>
    <StickyStatusContextProvider
      value={{ isHeaderSticky, isFirstColumnSticky }}
    >
      <table
        className={css`
          border-collapse: separate;
          border-spacing: 0px 0px;
          width: 100%;
        `}
      >
        <Header columns={columns} />
        <Body data={data} columns={columns} />
      </table>
    </StickyStatusContextProvider>
  </DraggableStatusContextProvider>
);

export default Table;
