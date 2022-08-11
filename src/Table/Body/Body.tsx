import { ColumnProps, DnDSortResult } from "../../types";
import Row from "./Row/Row";

const Body = <T,>({
  data,
  columns,
  isFirstColumnSticky,
}: {
  data: DnDSortResult<T>[];
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
}) => {
  return (
    <tbody>
      {data.map((d: DnDSortResult<T>) => (
        <Row
          key={d.key}
          data={d}
          columns={columns}
          isFirstColumnSticky={isFirstColumnSticky}
        />
      ))}
    </tbody>
  );
};

export default Body;
