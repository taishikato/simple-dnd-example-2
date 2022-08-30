import { css } from "@emotion/css";

const CollapseTriggerCell = ({ width }: { width: number }) => (
  <div
    className={css({
      width,
      border: "none",
      cursor: "pointer",
      boxSizing: "border-box",
      backgroundColor: "#e2e2e2", // TODO
    })}
  />
);

export default CollapseTriggerCell;
