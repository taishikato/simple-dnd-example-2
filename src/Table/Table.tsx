import { css } from "@emotion/css";
import { DraggableStatusContextProvider } from "./context/DraggableStatusContext";
import { StickyStatusContextProvider } from "./context/StickyStatusContext";
import Body from "./Body/Body";
import Header from "./Header/Header";
import type { ColumnProps, DataProps } from "./types";

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
          <Header columns={columns} isHeaderSticky={isHeaderSticky} />
          <Body data={data} columns={columns} />
        </table>
      </StickyStatusContextProvider>
    </DraggableStatusContextProvider>
  );
};

export default Table;
