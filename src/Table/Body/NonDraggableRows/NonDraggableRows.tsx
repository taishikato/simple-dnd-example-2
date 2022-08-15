import { ColumnProps, DataProps } from "../../types";
import Row from "./Row/Row";

const NonDraggableRows = <T extends string>({
  data,
  columns,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
}) => (
  <>
    {data.map((d) => (
      <Row key={d.valueName} data={d} columns={columns} />
    ))}
  </>
);

export default NonDraggableRows;
