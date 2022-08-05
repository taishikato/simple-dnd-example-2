import Cell from "./Cell/Cell";
import FirstCell from "./FirstCell/FirstCell";

const Header = () => {
  return (
    <thead>
      <tr>
        <FirstCell>Th1</FirstCell>
        <Cell>Th2</Cell>
        <Cell>Th3</Cell>
        <Cell>Th4</Cell>
        <Cell>Th5</Cell>
        <Cell>Th6</Cell>
      </tr>
    </thead>
  );
};

export default Header;
