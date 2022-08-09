import { css } from "@emotion/css";

const FirstCell = ({
  children,
  width,
}: {
  children: string | number | JSX.Element;
  width?: string;
}) => {
  return (
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
        ${width ? `min-width: ${width}` : ""}
      `}
    >
      {children}
    </th>
  );
};

export default FirstCell;
