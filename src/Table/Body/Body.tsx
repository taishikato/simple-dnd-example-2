import { ColumnProps, DataProps } from "../../types";
import { useDnDSort } from "../hooks/useDnDSort";
import Row from "./Row/Row";

const Body = <T,>({
  data,
  columns,
  isFirstColumnSticky,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
}) => {
  const result = useDnDSort(data);

  return (
    <tbody>
      {result.map((d) => (
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
