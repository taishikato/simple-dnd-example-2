import { css } from "@emotion/css";
import Cell from "./Cell/Cell";

const Header = () => {
  return (
    <thead>
      <tr>
        <th
          className={css`
            min-width: 150px;
            vertical-align: middle;
            padding: 10px 10px 10px 0;
            text-align: left;
            border-bottom: 1px solid #0b1424;
            position: sticky;
            top: 0px;
            left: 0;
            z-index: 20;
            background-color: #ffffff;
          `}
        >
          Th1
        </th>
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
