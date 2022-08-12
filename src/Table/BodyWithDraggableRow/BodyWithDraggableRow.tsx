import { ColumnProps, DataProps } from "../types";
import { useDnDSort } from "../hooks/useDnDSort";
import Row from "./Row/Row";

const BodyWithDraggableRow = <T extends string>({
  data,
  columns,
  isFirstColumnSticky,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
}) => {
  const results = useDnDSort(data);

  return (
    <tbody>
      {results.map((d) => (
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

export default BodyWithDraggableRow;
