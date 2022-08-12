import { css } from "@emotion/css";

type Props = {
  children: string | number | JSX.Element;
  width?: string;
  cellCSS?: Record<string, string | number>;
  isFirstColumnSticky: boolean;
};

const getStyle = (
  width: Props["width"],
  cellCSS: Props["cellCSS"],
  isFirstColumnSticky: Props["isFirstColumnSticky"]
) =>
  css([
    {
      verticalAlign: "middle",
      padding: "10px 10px 10px 0",
      textAlign: "left",
      fontWeight: 600,
      userSelect: "none",
      boxSizing: "border-box",
      borderBottom: "1px solid rgb(203 213 225)",
      backgroundColor: "#ffffff",
    },
    isFirstColumnSticky && {
      position: "sticky",
      left: 0,
      boxShadow: "3px 0px 2px rgba(0, 0, 0, 0.1)",
    },
    width && { minWidth: width },
    cellCSS && cellCSS,
  ]);

const FirstCell = ({
  children,
  width,
  cellCSS,
  isFirstColumnSticky,
}: Props) => {
  const styleToUse = getStyle(width, cellCSS, isFirstColumnSticky);

  return <th className={styleToUse}>{children}</th>;
};

export default FirstCell;
