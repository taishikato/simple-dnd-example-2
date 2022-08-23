import { cx, css } from "@emotion/css";
import {
  cols,
  rowLabelWidth,
  totalColLabelsWidth,
  baseZIndex,
  rows,
} from "../consts";

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

    console.log("clicked");
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
            height: 100,
            backgroundColor: "#e2e2e2", // TODO
            boxSizing: "border-box",
            cursor: "pointer",
          })}
        >
          Collapse bar
        </div>
        {[...Array(10).keys()].map((_, i) => {
          return (
            <div
              key={i}
              className={cx([
                css({
                  height: 100,
                  backgroundColor: "rgba(134,132,41,0.5)", // TODO
                  boxSizing: "border-box",
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
              backgroundColor: "rgba(134,132,41,0.5)", // TODO
              boxSizing: "border-box",
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
              <div className={css({ height: 100, display: "flex" })}>
                {cols.map((col, j) => (
                  <div
                    onClick={(e) => handleCollapse(e)}
                    className={css({
                      width: col.width,
                      border: "none",
                      color: "rgb(148 163 184)",
                      cursor: "pointer",
                      boxSizing: "border-box",
                      backgroundColor: "#e2e2e2", // TODO
                    })}
                    key={j}
                  >
                    collapse bar
                  </div>
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
                            backgroundColor: "#e2e2e2", // TODO
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
