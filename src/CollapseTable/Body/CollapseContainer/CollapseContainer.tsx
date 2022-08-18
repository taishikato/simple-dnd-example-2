import { css } from "@emotion/css";
import { useEffect, useRef, useState } from "react";
import CollapseArrow from "../../assets/CollapseArrow.svg";

const CollapseContainer = ({
  children,
  title,
  colSpan,
}: {
  children: string | number | JSX.Element;
  title: string;
  colSpan: number;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (height) return;

    setHeight(contentRef.current?.scrollHeight ?? 0);
  }, [contentRef.current]);

  return (
    <tr>
      <td colSpan={colSpan}>
        <details
          className={css({
            backgroundColor: "#e2e2e2",
            transition: "height 1s ease",
            "&[open] > summary > img": {
              transform: "rotate(360deg)",
            },
            // "& > summary + div": {
            //   height: 0,
            //   transition: "height 300ms",
            // },
            "&[open] > summary + div": {
              height,
            },
          })}
        >
          <summary
            className={css({
              padding: "10px 15px",
              listStyle: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "0.75rem",
              "&::marker, &::-webkit-details-marker": {
                display: "none",
              },
              "&::-webkit-details-marker": {},
            })}
            // onClick={() => {
            //   const height = contentRef.current?.scrollHeight;

            //   console.log({ height });

            //   setHeight(height ?? 0);
            // }}
          >
            <img
              src={CollapseArrow}
              className={css({ transform: "rotate(180deg)" })}
            />
            {title}
          </summary>
          <div
            ref={contentRef}
            className={css({
              // height: 0,
              transition: "height 300ms linear",
            })}
          >
            {children}
          </div>
        </details>
      </td>
    </tr>
  );
};

export default CollapseContainer;
