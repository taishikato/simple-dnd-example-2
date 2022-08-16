import { useContext } from "react";
import { css } from "@emotion/css";
import { StickyStatusContext } from "../../context/StickyStatusContext";

type Props = {
  children: string | number | JSX.Element;
  width?: string;
  headerCellCSS?: Record<string, string | number>;
};

const getStyle = (
  width: Props["width"],
  isHeaderSticky: boolean,
  headerCellCSS: Props["headerCellCSS"]
) =>
  css([
    {
      verticalAlign: "middle",
      padding: "10px",
      borderBottom: "1px solid #0b1424",
      backgroundColor: "#ffffff",
    },
    headerCellCSS && headerCellCSS,
    isHeaderSticky && { position: "sticky", top: 0, zIndex: 10 },
    width && { minWidth: width },
  ]);

const Cell = ({ children, width, headerCellCSS }: Props) => {
  const { isHeaderSticky } = useContext(StickyStatusContext);
  const styleToUse = getStyle(width, isHeaderSticky, headerCellCSS);

  return <th className={styleToUse}>{children}</th>;
};

export default Cell;
