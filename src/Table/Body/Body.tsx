import { ColumnProps, DnDSortResult } from "../../types";
import Row from "./Row/Row";

const Body = <T,>({
  data,
  columns,
}: {
  data: DnDSortResult<T>[];
  columns: ColumnProps[];
}) => {
  return (
    <tbody>
      {data.map((d: DnDSortResult<T>) => (
        <Row key={d.key} data={d} columns={columns} />
      ))}
    </tbody>
  );
};

export default Body;
