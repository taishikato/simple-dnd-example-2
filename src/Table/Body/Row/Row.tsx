import { css } from "@emotion/css";
import FirstCell from "./FirstCell/FirstCell";
import Cell from "./Cell/Cell";

const Row = ({ item }: { item: any }) => {
  return (
    <tr
      {...item.events}
      className={css`
        cursor: grab;
        position: relative;
        touch-action: none;
      `}
    >
      <FirstCell>{item.value.header}</FirstCell>
      <Cell>td 1</Cell>
      <Cell>{item.value.value}</Cell>
      <Cell>td 3</Cell>
      <Cell>td 4</Cell>
      <Cell>td 5</Cell>
    </tr>
  );
};

export default Row;
