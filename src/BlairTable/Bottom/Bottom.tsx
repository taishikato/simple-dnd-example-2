import { cx, css } from "@emotion/css";
import {
  cols,
  rowLabelWidth,
  totalColLabelsWidth,
  baseZIndex,
  rows,
} from "../consts";
import CollapseArrow from "../assets/CollapseArrow.svg";

const Bottom = () => {
  const handleCollapse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    // const targets = document.getElementsByClassName(
    //   "collapsible"
    // )[0] as HTMLElement;

    // targets.style.height = "0";
    // targets.style.overflow = "hidden";

    const targets = document.getElementsByClassName(
      "collapsible"
    ) as HTMLCollectionOf<HTMLElement>;

    if (targets[0].classList.contains("collapse-close")) {
      // Left
      Array.from(targets).forEach((e) => e.classList.remove("collapse-close"));

      // Right
      const containers = document.getElementsByClassName(
        "collapse-container"
      ) as HTMLCollectionOf<HTMLElement>;
      Array.from(containers).forEach((c) =>
        c.classList.remove("collapse-close")
      );

      return;
    }

    // Left
    Array.from(targets).forEach((e) => {
      e.classList.add("collapse-close");
      // e.style.height = "0";
      // e.style.overflow = "hidden";
    });

    // Right
    const containers = document.getElementsByClassName(
      "collapse-container"
    ) as HTMLCollectionOf<HTMLElement>;

    Array.from(containers).forEach((c) => {
      c.classList.add("collapse-close");
      // c.style.height = "0";
      // c.style.overflow = "hidden";
    });
  };

  return (
    <div
      className={css({
        clear: "both",
        width: rowLabelWidth + totalColLabelsWidth,
      })}
    >
      {/*region BOTTOM LEFT*/}
      <div
        className={css({
          position: "sticky",
          left: "0",
          width: rowLabelWidth,
          float: "left",
          zIndex: baseZIndex,
        })}
      >
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
          <img src={CollapseArrow} width="10px" />
          <span className={css({ fontSize: "14px" })}>Collapse bar</span>
        </div>
        {[...Array(10).keys()].map((_, i) => {
          return (
            <div
              key={i}
              className={cx([
                css({
                  height: 100,
                  border: "1px solid black", // TODO
                  backgroundColor: "rgb(153 246 228)", // TODO
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  transition: "height 200ms",
                }),
                "collapsible",
              ])}
            >
              Collapsible Label {i}
            </div>
          );
        })}
        {rows.map((row, i) => (
          <div
            key={i}
            className={css({
              height: row.height,
              border: "1px solid black", // TODO
              backgroundColor: "rgb(153 246 228)", // TODO
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              transition: "height 200ms",
            })}
          >
            Label {row.text}
          </div>
        ))}
      </div>
      {/*endregion*/}
      {/*region BOTTOM RIGHT*/}
      <div
        className={css({
          width: totalColLabelsWidth,
          float: "left",
          backgroundColor: "white", // TODO
        })}
      >
        {(() => {
          return (
            <div>
              <div className={css({ height: 30, display: "flex" })}>
                {cols.map((col, j) => (
                  <div
                    onClick={(e) => handleCollapse(e)}
                    className={css({
                      width: col.width,
                      border: "none",
                      cursor: "pointer",
                      boxSizing: "border-box",
                      backgroundColor: "#e2e2e2", // TODO
                    })}
                    key={j}
                  />
                ))}
              </div>
              {[...Array(10).keys()].map((_, i) => {
                return (
                  <div
                    key={i}
                    className={cx([
                      css({
                        height: 100,
                        display: "flex",
                        transition: "height 200ms",
                      }),
                      "collapse-container",
                    ])}
                  >
                    {cols.map((col, j) => (
                      <div
                        onClick={(e) => handleCollapse(e)}
                        className={cx([
                          css({
                            width: col.width,
                            border: "1px solid red",
                            boxSizing: "border-box",
                          }),
                        ])}
                        key={j}
                      >
                        collapsible element {i}
                      </div>
                    ))}
                  </div>
                );
              })}
              {rows.map((row, i) => (
                <div
                  key={i}
                  className={css({ height: row.height, display: "flex" })}
                >
                  {cols.map((col, j) => (
                    <div
                      className={css({
                        width: col.width,
                        border: "1px solid red",
                        boxSizing: "border-box",
                      })}
                      key={j}
                    >{`${row.text} / ${col.text}`}</div>
                  ))}
                </div>
              ))}
            </div>
          );
        })()}
      </div>
      {/*endregion*/}
    </div>
  );
};

export default Bottom;
