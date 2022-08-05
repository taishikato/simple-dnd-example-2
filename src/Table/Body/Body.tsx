import { css } from "@emotion/css";
import Cell from "./Cell/Cell";

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
            <th
              className={css`
                min-width: 130px;
                vertical-align: middle;
                padding: 10px 10px 10px 0;
                text-align: left;
                font-weight: 600;
                user-select: none;
                box-sizing: border-box;
                border-bottom: 1px solid rgb(203 213 225);
                position: sticky;
                left: 0;
                box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.1);
                background-color: #ffffff;
              `}
            >
              {r.value.header}
            </th>
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
