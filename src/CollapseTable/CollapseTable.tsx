import { css } from "@emotion/css";
import { StickyStatusContextProvider } from "./context/StickyStatusContext";
import Body from "./Body/Body";
import Header from "./Header/Header";
import type { ColumnProps, DataProp } from "./types";

const CollapseTable = <T extends string>({
  data,
  columns,
  isHeaderSticky = false,
  isFirstColumnSticky = false,
}: {
  data: DataProp<T>[];
  columns: ColumnProps[];
  isHeaderSticky?: boolean;
  isFirstColumnSticky?: boolean;
  isDraggable?: boolean;
}) => (
  <StickyStatusContextProvider value={{ isHeaderSticky, isFirstColumnSticky }}>
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
);

export default CollapseTable;
