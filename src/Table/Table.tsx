import { css } from "@emotion/css";
import { useDnDSort } from "./hooks/useDnDSort";
import Header from "./Header/Header";
import Body from "./Body/Body";
import type { ColumnProps, DataProps } from "../types";

const Table = <T,>({
  data,
  columns,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
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
      <Header columns={columns} />
      <Body items={results} columns={columns} />
    </table>
  );
};

export default Table;
