import { css } from "@emotion/css";

const CollapseTriggerCell = () => (
  <div
    className={css({
      width: "100px",
      border: "none",
      cursor: "pointer",
      boxSizing: "border-box",
      backgroundColor: "#e2e2e2", // TODO
    })}
  />
);

export default CollapseTriggerCell;
