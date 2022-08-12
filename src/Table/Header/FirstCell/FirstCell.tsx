import { css } from "@emotion/css";

type Props = {
  children: string | number | JSX.Element;
  width?: string;
  headerCellCSS?: Record<string, string | number>;
  isFirstColumnSticky: boolean;
  isHeaderSticky: boolean;
};

const getStyle = (
  width: Props["width"],
  isFirstColumnSticky: Props["isFirstColumnSticky"],
  isHeaderSticky: Props["isHeaderSticky"],
  headerCellCSS: Props["headerCellCSS"]
) =>
  css([
    {
      minWidth: "auto",
      verticalAlign: "middle",
      padding: "10px 10px 10px 0",
      textAlign: "left",
      borderBottom: "1px solid #0b1424",
      backgroundColor: "#ffffff",
    },
    headerCellCSS && headerCellCSS,
    isHeaderSticky &&
      isFirstColumnSticky && {
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 20,
      },
    isHeaderSticky &&
      !isFirstColumnSticky && { position: "sticky", top: 0, zIndex: 20 },
    !isHeaderSticky &&
      isFirstColumnSticky && { position: "sticky", left: 0, zIndex: 20 },
    width && { minWidth: width },
  ]);

const FirstCell = ({
  children,
  width,
  headerCellCSS,
  isFirstColumnSticky,
  isHeaderSticky,
}: Props) => {
  const styleToUse = getStyle(
    width,
    isFirstColumnSticky,
    isHeaderSticky,
    headerCellCSS
  );

  return <th className={styleToUse}>{children}</th>;
};

export default FirstCell;
