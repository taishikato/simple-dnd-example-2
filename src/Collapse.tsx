import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const Collapse = () => {
  return (
    <div
      className={css`
        width: 600px;
        margin: 0 auto;
      `}
    >
      <div
        className={css`
          margin: 10px 0;
        `}
      >
        <Link to="/">Go to the draggable table</Link>
      </div>
      <div>Collapse</div>
    </div>
  );
};

export default Collapse;
