import { css } from "@emotion/css";

type Props = {
  children: string | number | JSX.Element;
  width?: string;
  cellCSS?: Record<string, string | number>;
};

const getStyle = (width: Props["width"], cellCSS: Props["cellCSS"]) =>
  css([
    {
      wordBreak: "break-all",
      padding: "10px",
      textAlign: "center",
      verticalAlign: "middle",
      backgroundColor: "#ffffff",
      fontWeight: 600,
      boxSizing: "border-box",
      borderBottom: "1px solid rgb(203 213 225)",
      "&:not(:last-child)": {
        borderRight: "1px solid rgb(203 213 225)",
      },
    },
    width && { minWidth: width },
    cellCSS && cellCSS,
  ]);

const Cell = ({ children, width, cellCSS }: Props) => {
  const styleToUse = getStyle(width, cellCSS);

  return <td className={styleToUse}>{children}</td>;
};

export default Cell;
