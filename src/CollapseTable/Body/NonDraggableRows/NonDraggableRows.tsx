import { css } from "@emotion/css";
import { ColumnProps, DataProps } from "../../types";
import Row from "./Row/Row";
import Cell from "../Cells/Cell";
import CollapseArrow from "../../assets/CollapseArrow.svg";

const NonDraggableRows = <T extends string>({
  data,
  columns,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
}) => (
  <>
    <tr>
      <td colSpan={5}>
        <details
          className={css({
            backgroundColor: "#e2e2e2",
            transition: "height 1s ease",
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
              "&::marker": {
                display: "none",
              },
              "&::-webkit-details-marker": {
                display: "none",
              },
            })}
          >
            <img src={CollapseArrow} />
            Temperature
          </summary>
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
        </details>
      </td>
    </tr>
    {data.map((d) => (
      <Row key={d.valueName} data={d} columns={columns} />
    ))}
  </>
);

export default NonDraggableRows;
