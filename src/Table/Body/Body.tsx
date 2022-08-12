import { ColumnProps, DataProps } from "../../types";
import Row from "./Row/Row";

const Body = <T extends string>({
  data,
  columns,
  isFirstColumnSticky,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
}) => {
  return (
    <tbody>
      {data.map((d) => (
        <Row
          key={d.valueName}
          data={d}
          columns={columns}
          isFirstColumnSticky={isFirstColumnSticky}
        />
      ))}
    </tbody>
  );
};

export default Body;
