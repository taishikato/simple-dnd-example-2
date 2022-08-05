import Row from "./Row/Row";

const Body = ({ items }: { items: any }) => {
  return (
    <tbody>
      {items.map((r: any) => (
        <Row key={r.key} item={r} />
      ))}
    </tbody>
  );
};

export default Body;
