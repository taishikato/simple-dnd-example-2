import { css, cx } from "@emotion/css";

type Props = {
  children: string | number | JSX.Element;
  width?: string;
  customClasses?: string[];
  isFirstColumnSticky: boolean;
};

const getDefaultStyle = (
  width: Props["width"],
  isFirstColumnSticky: Props["isFirstColumnSticky"]
) => css`
  vertical-align: middle;
  padding: 10px 10px 10px 0;
  text-align: left;
  font-weight: 600;
  user-select: none;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(203 213 225);
  background-color: #ffffff;
  ${isFirstColumnSticky
    ? "position: sticky; left: 0; box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.1);"
    : ""};
  ${width ? `min-width: ${width}` : ""}
`;

const FirstCell = ({
  children,
  width,
  customClasses,
  isFirstColumnSticky,
}: Props) => {
  const defaultStyle = getDefaultStyle(width, isFirstColumnSticky);
  const StyleToUse = customClasses
    ? cx(defaultStyle, ...[customClasses])
    : defaultStyle;

  return <th className={StyleToUse}>{children}</th>;
};

export default FirstCell;
