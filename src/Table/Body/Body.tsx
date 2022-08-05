import { ColumnProps } from "../../types";
import Row from "./Row/Row";

const Body = ({ items, columns }: { items: any; columns: ColumnProps[] }) => {
  return (
    <tbody>
      {items.map((r: any) => (
        <Row key={r.key} item={r} columns={columns} />
      ))}
    </tbody>
  );
};

export default Body;
