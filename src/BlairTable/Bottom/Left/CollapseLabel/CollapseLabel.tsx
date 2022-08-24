import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import CollapseArrow from "../../../assets/CollapseArrow.svg";
import { collapseClassPrefix } from "../../../consts";

const CollapseLabel = ({ name }: { name: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const collapseName = `${collapseClassPrefix}${name}`;

  const handleCollapse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    setIsOpen(!isOpen);

    const targets = document.getElementsByClassName(
      collapseName
    ) as HTMLCollectionOf<HTMLElement>;

    if (targets[0].classList.contains("collapse-close")) {
      Array.from(targets).forEach((e) => e.classList.remove("collapse-close"));

      return;
    }

    Array.from(targets).forEach((e) => {
      e.classList.add("collapse-close");
    });
  };

  useEffect(() => {
    const targetNode = document.getElementsByClassName(collapseName)[0];
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: false, subtree: false };

    // Callback function to execute when mutations are observed
    const callback = (mutationList: any, observer: any) => {
      for (const mutation of mutationList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (targetNode.classList.contains("collapse-close")) {
            setIsOpen(false);
            return;
          }
          setIsOpen(true);
        }
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, []);

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
