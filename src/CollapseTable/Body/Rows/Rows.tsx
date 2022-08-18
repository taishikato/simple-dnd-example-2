import { css, cx } from "@emotion/css";
import { ColumnProps, DataProps } from "../../types";
import CollapseContainer from "../CollapseContainer/CollapseContainer";
import Row from "./Row/Row";
import Cell from "../Cells/Cell";
import { useRef } from "react";

const Rows = <T extends string>({
  data,
  columns,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
}) => {
  const summaryRef = useRef<HTMLElement>(null);
  const contentRef = useRef(null);
  const animationRef = useRef<Animation | null>(null);
  const isExpandingRef = useRef(false);
  const isClosingRef = useRef(false);

  const expand = (
    currentTarget: EventTarget & HTMLDetailsElement,
    summaryRef: any,
    contentRef: any
  ) => {
    // Set the element as "being expanding"
    isExpandingRef.current = true;
    // Get the current fixed height of the element
    const startHeight = `${currentTarget.offsetHeight}px`;
    // Calculate the open height of the element (summary height + content height)
    const endHeight = `${
      summaryRef.current.offsetHeight + contentRef.current.offsetHeight
    }px`;

    // Start a WAAPI animation
    animationRef.current = currentTarget.animate(
      {
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: "ease-out",
      }
    );
    // When the animation is complete, call onAnimationFinish()
    animationRef.current.onfinish = () =>
      onAnimationFinish(true, currentTarget);
    // If the animation is cancelled, isExpanding variable is set to false
    animationRef.current.oncancel = () => (isExpandingRef.current = false);
  };

  const onAnimationFinish = (
    open: boolean,
    currentTarget: EventTarget & HTMLDetailsElement
  ) => {
    // Set the open attribute based on the parameter
    currentTarget.open = open;
    // Clear the stored animation
    animationRef.current = null;
    // Reset isClosing & isExpanding
    isClosingRef.current = false;
    isExpandingRef.current = false;
    // Remove the overflow hidden and the fixed height
    currentTarget.style.height = currentTarget.style.overflow = "";
  };

  const open = (detailElement: EventTarget & HTMLDetailsElement) => {
    // Apply a fixed height on the element
    detailElement.style.height = `${detailElement.offsetHeight}px`;
    // Force the [open] attribute on the details element
    detailElement.open = true;

    // Wait for the next frame to call the expand function
    window.requestAnimationFrame(() => {
      expand(detailElement, summaryRef, contentRef);
    });
  };

  const shrink = (detailElement: EventTarget & HTMLDetailsElement) => {
    // Set the element as "being closed"
    isClosingRef.current = true;

    // Store the current height of the element
    const startHeight = `${detailElement.offsetHeight}px`;
    // Calculate the height of the summary
    const endHeight = `${summaryRef.current?.offsetHeight}px`;

    // If there is already an animation running
    if (animationRef.current) {
      // Cancel the current animation
      animationRef.current.cancel();
    }

    // Start a WAAPI animation
    animationRef.current = detailElement.animate(
      {
        // Set the keyframes from the startHeight to endHeight
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: "ease-out",
      }
    );

    // When the animation is complete, call onAnimationFinish()
    animationRef.current.onfinish = () =>
      onAnimationFinish(false, detailElement);
    // If the animation is cancelled, isClosing variable is set to false
    animationRef.current.oncancel = () => (isClosingRef.current = false);
  };

  return (
    <>
      <tr>
        <td colSpan={6}>
          <details
            className={css({
              boxSizing: "border-box",
            })}
            onClick={(e) => {
              e.preventDefault();

              e.currentTarget.style.overflow = "hidden";
              if (isClosingRef.current || !e.currentTarget.open) {
                open(e.currentTarget);
              } else if (isExpandingRef.current || e.currentTarget.open) {
                shrink(e.currentTarget);
              }
            }}
          >
            <summary
              ref={summaryRef}
              className={css({
                cursor: "pointer",
                background: "#e2e2e2",
                padding: "10px 15px",
                outline: "none",
              })}
            >
              Click to expand this details with a WAAPI sliding effect
            </summary>
            <div ref={contentRef} className="content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                unde, ex rem voluptates autem aliquid veniam quis temporibus
                repudiandae illo, nostrum, pariatur quae! At animi modi
                dignissimos corrupti placeat voluptatum!
              </p>
              <img src="https://placebear.com/400/200" alt="" />
              <p>
                Facilis ducimus iure officia quos possimus quaerat iusto, quas,
                laboriosam sapiente autem ab assumenda eligendi voluptatum nisi
                eius cumque, tempore reprehenderit optio placeat praesentium non
                sint repellendus consequuntur? Nihil, soluta.
              </p>
            </div>
          </details>
        </td>
      </tr>
      {/* <CollapseContainer title="Temperature" colSpan={columns.length}>
        <table
          className={css({
            borderCollapse: "separate",
            borderSpacing: "0px 0px",
            width: "100%",
          })}
        >
          <tbody>
            <tr>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
            </tr>
            <tr>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
            </tr>
            <tr>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
            </tr>
          </tbody>
        </table>
      </CollapseContainer>
      <CollapseContainer title="Humidity" colSpan={columns.length}>
        <table
          className={css({
            borderCollapse: "separate",
            borderSpacing: "0px 0px",
            width: "100%",
          })}
        >
          <tbody>
            <tr>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
            </tr>
            <tr>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
            </tr>
            <tr>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
              <Cell>value</Cell>
            </tr>
          </tbody>
        </table>
      </CollapseContainer> */}
      {data.map((d) => (
        <Row key={d.valueName} data={d} columns={columns} />
      ))}
    </>
  );
};

export default Rows;
