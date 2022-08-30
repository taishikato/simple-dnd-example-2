import type { ColumnProps } from "../../../types";
import { css } from "@emotion/css";
import { handleCollapse } from "../../../_utils/handleCollapse";
import { collapseClassPrefix } from "../../../consts";
import CollapseTriggerCell from "./CollapseTriggerCell/CollapseTriggerCell";

const CollapseTriggerRow = ({
  columns,
  name,
}: {
  columns: ColumnProps[];
  name: string;
}) => {
  const collapseName = `${collapseClassPrefix}${name}`;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    handleCollapse({ e, collapseClassName: collapseName });

  return (
    <div
      className={css({ height: 30, display: "flex" })}
      onClick={(e) => handleClick(e)}
    >
      {columns.map((col, i: number) => {
        if (i !== 0)
          return <CollapseTriggerCell key={col.key} width={col.width} />;
      })}
    </div>
  );
};

export default CollapseTriggerRow;
