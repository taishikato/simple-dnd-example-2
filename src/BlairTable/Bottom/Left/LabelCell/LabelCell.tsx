import { cx, css } from "@emotion/css";

const LabelCell = ({
  children,
  name,
}: {
  children: JSX.Element | string | number;
  name: string;
}) => {
  return (
    <div
      className={cx([
        css({
          height: "100px", // row.height TODO
          borderLeft: "1px solid #e2e2e2",
          borderBottom: "1px solid #e2e2e2",
          backgroundColor: "#ffffff",
          boxShadow: "3px 0px 2px rgba(0, 0, 0, 0.1)",
          boxSizing: "border-box",
          padding: "0 15px",
          display: "flex",
          alignItems: "center",
          transition: "height 200ms, opacity 200ms",
        }),
        `collapse-${name}`,
      ])}
    >
      {children}
    </div>
  );
};

export default LabelCell;
