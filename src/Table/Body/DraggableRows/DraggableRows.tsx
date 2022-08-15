import { ColumnProps, DataProps } from "../../types";
import { useDnDSort } from "../../hooks/useDnDSort";
import Row from "./Row/Row";

const DraggableRows = <T extends string>({
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
    <>
      {results.map((d) => (
        <Row
          key={d.key}
          data={d}
          columns={columns}
          isFirstColumnSticky={isFirstColumnSticky}
        />
      ))}
    </>
  );
};

export default DraggableRows;
