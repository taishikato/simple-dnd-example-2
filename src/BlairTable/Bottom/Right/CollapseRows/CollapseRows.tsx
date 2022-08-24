import { css } from "@emotion/css";

const CollapseRows = ({ columns, collapseName }: any) => {
  const handleCollapse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    const targets = document.getElementsByClassName(
      `collapse-${collapseName}`
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
      className={css({ height: 30, display: "flex" })}
      onClick={(e) => handleCollapse(e)}
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
