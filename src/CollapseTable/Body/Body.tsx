import Rows from "./Rows/Rows";
import type { ColumnProps, DataProps } from "../types";

const Body = <T extends string>({
  data,
  columns,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
}) => {
  return (
    <tbody>
      <Rows<T> data={data} columns={columns} />
    </tbody>
  );
};

export default Body;
