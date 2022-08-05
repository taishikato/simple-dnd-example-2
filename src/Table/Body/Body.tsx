import { css } from "@emotion/css";
import Cell from "./Cell/Cell";
import FirstCell from "./FirstCell/FirstCell";

const Body = ({ items }: { items: any }) => {
  return (
    <tbody>
      {items.map((r: any) => {
        return (
          <tr
            key={r.key}
            {...r.events}
            className={css`
              cursor: grab;
              position: relative;
              touch-action: none;
            `}
          >
            <FirstCell>{r.value.header}</FirstCell>
            <Cell>td 1</Cell>
            <Cell>{r.value.value}</Cell>
            <Cell>td 3</Cell>
            <Cell>td 4</Cell>
            <Cell>td 5</Cell>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Body;
