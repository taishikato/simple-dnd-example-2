import { useRef } from "react";
import { css } from "@emotion/css";
import { open } from "./open";
import { close } from "./close";
import CollapseArrow from "../../assets/CollapseArrow.svg";

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
          className={css({
            "&[open] > summary > img": {
              transform: "rotate(0)",
            },
          })}
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
              listStyle: "none",
              cursor: "pointer",
              background: "#e2e2e2",
              padding: "10px 15px",
              outline: "none",
              "&::marker, &::-webkit-details-marker": {
                display: "none",
              },
            })}
          >
            <img
              src={CollapseArrow}
              className={css({
                transform: "rotate(180deg)",
                transition: "all 300ms",
                marginRight: "17px",
              })}
            />
            {title}
          </summary>
          <div ref={contentRef} className="content">
            <table
              className={css({
                borderCollapse: "separate",
                borderSpacing: "0px 0px",
                width: "100%",
              })}
            >
              <tbody>{children}</tbody>
            </table>
          </div>
        </details>
      </td>
    </tr>
  );
};

export default CollapseContainer2;
