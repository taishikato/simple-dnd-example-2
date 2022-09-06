import { css } from "@emotion/css";
import CollapseArrow from "../../../assets/CollapseArrow.svg";
import { collapseClassPrefix } from "../../../consts";
import { handleCollapse } from "../../../_utils/handleCollapse";
import useCollapseStatus from "../../../hooks/useCollapseStatus";

const CollapseTriggerLabelCell = ({ name }: { name: string }) => {
  const collapseName = `${collapseClassPrefix}${name}`;
  const { isOpen } = useCollapseStatus(collapseName);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    handleCollapse({ e, collapseClassName: collapseName });

  return (
    <div
      onClick={(e) => handleClick(e)}
      className={css([
        {
          width: "100%",
          height: 30,
          backgroundColor: "#e2e2e2", // TODO
          boxSizing: "border-box",
          cursor: "pointer",
          padding: "0 15px",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        },
        !isOpen && { borderBottom: "1px solid #cccbcb" },
      ])}
    >
      <img
        src={CollapseArrow}
        width="10px"
        className={css([
          isOpen && { transform: "rotate(180deg)" },
          !isOpen && { transform: "rotate(0)" },
        ])}
      />
      <span className={css({ fontSize: "14px", marginLeft: "12px" })}>
        {name}
      </span>
    </div>
  );
};

export default CollapseTriggerLabelCell;
