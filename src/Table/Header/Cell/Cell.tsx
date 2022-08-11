import { css } from "@emotion/css";

const Cell = ({
  children,
  width,
  isHeaderSticky,
}: {
  children: string | number | JSX.Element;
  width?: string;
  isHeaderSticky: boolean;
}) => (
  <th
    className={css`
      vertical-align: middle;
      padding: 10px;
      border-bottom: 1px solid #0b1424;
      background-color: #ffffff;
      ${isHeaderSticky ? "position: sticky; top: 0; z-index: 10;" : ""}
      ${width ? `min-width: ${width}` : ""}
    `}
  >
    {children}
  </th>
);

export default Cell;
