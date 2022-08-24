import { css } from "@emotion/css";
import { handleCollapse } from "../../../_utils/handleCollapse";
import { collapseClassPrefix } from "../../../consts";

const CollapseRows = ({ columns, name }: any) => {
  const collapseName = `${collapseClassPrefix}${name}`;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    handleCollapse({ e, collapseClassName: collapseName });

  return (
    <div
      className={css({ height: 30, display: "flex" })}
      onClick={(e) => handleClick(e)}
    >
      {columns.map((col: any, i: number) => {
        if (i !== 0)
          return (
            <div
              key={col.key}
              className={css({
                width: "100px",
                border: "none",
                cursor: "pointer",
                boxSizing: "border-box",
                backgroundColor: "#e2e2e2", // TODO
              })}
            />
          );
      })}
    </div>
  );
};

export default CollapseRows;
