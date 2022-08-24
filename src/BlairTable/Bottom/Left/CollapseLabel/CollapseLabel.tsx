import { css } from "@emotion/css";
import { useState } from "react";
import CollapseArrow from "../../../assets/CollapseArrow.svg";

const CollapseLabel = ({ name }: { name: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCollapse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    setIsOpen(!isOpen);

    const targets = document.getElementsByClassName(
      `collapse-${name}`
    ) as HTMLCollectionOf<HTMLElement>;

    if (targets[0].classList.contains("collapse-close")) {
      Array.from(targets).forEach((e) => e.classList.remove("collapse-close"));

      return;
    }

    Array.from(targets).forEach((e) => {
      e.classList.add("collapse-close");
    });
  };

  return (
    <div
      onClick={(e) => handleCollapse(e)}
      className={css({
        height: 30,
        backgroundColor: "#e2e2e2", // TODO
        boxSizing: "border-box",
        cursor: "pointer",
        padding: "0 15px",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        columnGap: "12px",
      })}
    >
      <img
        src={CollapseArrow}
        width="10px"
        className={css([
          isOpen && { transform: "rotate(180deg)" },
          !isOpen && { transform: "rotate(0)" },
        ])}
      />
      <span className={css({ fontSize: "14px" })}>{name}</span>
    </div>
  );
};

export default CollapseLabel;
