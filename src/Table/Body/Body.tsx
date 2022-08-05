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
      {data.map((r: any) => (
        <Row key={r.key} data={r} columns={columns} />
      ))}
    </tbody>
  );
};

export default Body;
