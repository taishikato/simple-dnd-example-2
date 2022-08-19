import { useRef } from "react";
import { css } from "@emotion/css";
import { open } from "./open";
import { close } from "./close";

const CollapseContainer2 = ({
  title,
  colSpan,
  children,
}: {
  title: string;
  colSpan: number;
  children: JSX.Element;
}) => {
  const summaryRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const isExpandingRef = useRef(false);
  const isClosingRef = useRef(false);

  return (
    <tr>
      <td colSpan={colSpan}>
        <details
          onClick={(e) => {
            e.preventDefault();

            e.currentTarget.style.overflow = "hidden";

            if (isClosingRef.current || !e.currentTarget.open) {
              open({
                detailElement: e.currentTarget,
                summaryRef,
                contentRef,
                isClosingRef,
                isExpandingRef,
                animationRef,
              });
            } else if (isExpandingRef.current || e.currentTarget.open) {
              close({
                detailElement: e.currentTarget,
                isClosingRef,
                summaryRef,
                isExpandingRef,
                animationRef,
              });
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
            {title}
          </summary>
          <div ref={contentRef} className="content">
            {children}
          </div>
        </details>
      </td>
    </tr>
  );
};

export default CollapseContainer2;
