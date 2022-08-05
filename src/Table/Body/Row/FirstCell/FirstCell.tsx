import { css } from "@emotion/css";

const FirstCell = ({
  children,
}: {
  children: string | number | JSX.Element;
}) => {
  return (
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
      {children}
    </th>
  );
};

export default FirstCell;
