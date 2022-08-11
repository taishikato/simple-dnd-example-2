import { css } from "@emotion/css";

const FirstCell = ({
  children,
  width,
  isFirstColumnSticky,
  isHeaderSticky,
}: {
  children: string | number | JSX.Element;
  width?: string;
  isFirstColumnSticky: boolean;
  isHeaderSticky: boolean;
}) => (
  <th
    className={css`
      min-width: 150px;
      vertical-align: middle;
      padding: 10px 10px 10px 0;
      text-align: left;
      border-bottom: 1px solid #0b1424;
      background-color: #ffffff;
      ${isHeaderSticky && isFirstColumnSticky
        ? "position: sticky; top: 0px; left: 0; z-index: 20;"
        : ""}
      ${isHeaderSticky && !isFirstColumnSticky
        ? "position: sticky; top: 0px; z-index: 20;"
        : ""}
		    ${!isHeaderSticky && isFirstColumnSticky
        ? "position: sticky; left: 0; z-index: 20;"
        : ""}
        ${width ? `min-width: ${width}` : ""}
    `}
  >
    {children}
  </th>
);

export default FirstCell;
