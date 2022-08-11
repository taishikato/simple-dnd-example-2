import { css } from "@emotion/css";
import { useDnDSort } from "./hooks/useDnDSort";
import Header from "./Header/Header";
import Body from "./Body/Body";
import type { ColumnProps, DataProps } from "../types";

const Table = <T,>({
  data,
  columns,
  isFirstColumnSticky,
  isHeaderSticky,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
  isHeaderSticky: boolean;
}) => {
  const results = useDnDSort(data);

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
      <Body data={results} columns={columns} />
    </table>
  );
};

export default Table;
