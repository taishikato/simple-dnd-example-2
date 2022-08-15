import { ColumnProps, DataProps } from "../../types";
import { useDnDSort } from "../../hooks/useDnDSort";
import Row from "./Row/Row";

const DraggableRows = <T extends string>({
  data,
  columns,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
}) => {
  const results = useDnDSort(data);

  return (
    <>
      {results.map((d) => (
        <Row key={d.key} data={d} columns={columns} />
      ))}
    </>
  );
};

export default DraggableRows;
