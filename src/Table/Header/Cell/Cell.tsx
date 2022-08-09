import { css } from "@emotion/css";

const Cell = ({
  children,
  width,
}: {
  children: string | number | JSX.Element;
  width?: string;
}) => {
  return (
    <th
      className={css`
        vertical-align: middle;
        padding: 10px;
        border-bottom: 1px solid #0b1424;
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: #ffffff;
        ${width ? `min-width: ${width}` : ""}
      `}
    >
      {children}
    </th>
  );
};

export default Cell;
