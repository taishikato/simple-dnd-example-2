import { css } from "@emotion/css";

const Cell = ({
  children,
  width,
}: {
  children: string | number | JSX.Element;
  width?: string;
}) => {
  return (
    <td
      className={css`
        word-break: break-all;
        padding: 10px;
        vertical-align: middle;
        background-color: #ffffff;
        padding: 10px;
        text-align: center;
        font-weight: 600;
        user-select: none;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(203 213 225);
        &:not(:last-child) {
          border-right: 1px solid rgb(203 213 225);
        }
        ${width ? `min-width: ${width}` : ""}
      `}
    >
      {children}
    </td>
  );
};

export default Cell;
