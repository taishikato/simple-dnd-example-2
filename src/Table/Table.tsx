import { css } from "@emotion/css";
import { useDnDSort } from "./hooks/useDnDSort";
import Header from "./Header/Header";
import Body from "./Body/Body";
import type { ColumnProps } from "../types";

const Table = ({
  itemList,
  columns,
}: {
  itemList: any;
  columns: ColumnProps[];
}) => {
  const results = useDnDSort(itemList);

  return (
    <table
      className={css`
        border-collapse: separate;
        border-spacing: 0px 0px;
        width: 100%;
      `}
    >
      <Header columns={columns} />
      <Body items={results} />
    </table>
  );
};

export default Table;
