import { css } from "@emotion/css";
import CollapseArrow from "../assets/CollapseArrow.svg";

const CollapseContainer = ({
  children,
  title,
  colSpan,
}: {
  children: string | number | JSX.Element;
  title: string;
  colSpan: number;
}) => (
  <tr>
    <td colSpan={colSpan}>
      <details
        className={css({
          backgroundColor: "#e2e2e2",
          transition: "height 1s ease",
          "&[open] > summary > img": {
            transform: "rotate(360deg)",
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
        >
          <img
            src={CollapseArrow}
            className={css({ transform: "rotate(180deg)" })}
          />
          {title}
        </summary>
        {children}
      </details>
    </td>
  </tr>
);

export default CollapseContainer;
