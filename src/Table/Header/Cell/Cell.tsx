import { css } from "@emotion/css";

type Props = {
  children: string | number | JSX.Element;
  width?: string;
  isHeaderSticky: boolean;
};

const getStyle = (
  width: Props["width"],
  isHeaderSticky: Props["isHeaderSticky"]
) =>
  css([
    {
      verticalAlign: "middle",
      padding: "10px",
      borderBottom: "1px solid #0b1424",
      backgroundColor: "#ffffff",
    },
    isHeaderSticky && { position: "sticky", top: 0, zIndex: 10 },
    width && { minWidth: width },
  ]);

const Cell = ({ children, width, isHeaderSticky }: Props) => {
  const styleToUse = getStyle(width, isHeaderSticky);

  return <th className={styleToUse}>{children}</th>;
};

export default Cell;
