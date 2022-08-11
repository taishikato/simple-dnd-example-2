import { css, cx } from "@emotion/css";

type Props = {
  children: string | number | JSX.Element;
  width?: string;
  customClass?: string;
};

const getDefaultStyle = (width: Props["width"]) => css`
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
`;

const Cell = ({ children, width, customClass }: Props) => {
  const defaultStyle = getDefaultStyle(width);
  const StyleToUse = customClass ? cx(defaultStyle, customClass) : defaultStyle;

  return <td className={StyleToUse}>{children}</td>;
};

export default Cell;
