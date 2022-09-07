import { cx, css } from "@emotion/css";
import { ColumnProps } from "../../../types";

const LabelCell = <T extends string>({
  children,
  name,
  height,
  cellCSS,
  isFirstColumnSticky,
}: {
  children: JSX.Element | string | number;
  name: string;
  height: number;
  cellCSS: ColumnProps<T>["cellCSS"];
  isFirstColumnSticky: boolean;
}) => {
  return (
    <div
      className={cx([
        css([
          {
            width: "100%",
            height,
            borderLeft: "1px solid #e2e2e2",
            borderBottom: "1px solid #e2e2e2",
            backgroundColor: "#ffffff",
            boxShadow: "3px 0px 2px rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            padding: "0 15px",
            display: "flex",
            alignItems: "center",
            transition: "height 200ms, opacity 200ms",
          },
          cellCSS && cellCSS,
          isFirstColumnSticky
            ? {
                boxShadow: "3px 0px 2px rgba(0, 0, 0, 0.1)",
              }
            : { borderRight: "1px solid #e2e2e2" },
        ]),
        `collapse-${name}`,
      ])}
    >
      {children}
    </div>
  );
};

export default LabelCell;
