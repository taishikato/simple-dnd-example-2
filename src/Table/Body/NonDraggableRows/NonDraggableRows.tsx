import { ColumnProps, DataProps } from "../../types";
import Row from "./Row/Row";

const NonDraggableRows = <T extends string>({
  data,
  columns,
  isFirstColumnSticky,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
}) => (
  <>
    {data.map((d) => (
      <Row
        key={d.valueName}
        data={d}
        columns={columns}
        isFirstColumnSticky={isFirstColumnSticky}
      />
    ))}
  </>
);

export default NonDraggableRows;
