import type { ColumnProps } from "../../../types";
import { css } from "@emotion/css";
import { handleCollapse } from "../../../_utils/handleCollapse";
import { collapseClassPrefix } from "../../../consts";
import CollapseTriggerCell from "./CollapseTriggerCell/CollapseTriggerCell";
import useCollapseStatus from "../../../hooks/useCollapseStatus";

const CollapseTriggerRow = <T extends string>({
  columns,
  name,
}: {
  columns: ColumnProps<T>[];
  name: string;
}) => {
  const collapseName = `${collapseClassPrefix}${name}`;
  const { isOpen } = useCollapseStatus(collapseName);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    handleCollapse({ e, collapseClassName: collapseName });

  return (
    <div
      className={css([
        { height: 30, display: "flex", boxSizing: "border-box" },
        !isOpen && { borderBottom: "1px solid #cccbcb" },
      ])}
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
