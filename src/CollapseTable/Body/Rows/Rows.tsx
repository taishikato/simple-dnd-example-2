import { css } from "@emotion/css";
import { ColumnProps, DataProps } from "../../types";
import CollapseContainer from "../../CollapseContainer/CollapseContainer";
import Row from "./Row/Row";
import Cell from "../Cells/Cell";

const Rows = <T extends string>({
  data,
  columns,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
}) => (
  <>
    <CollapseContainer title="Temperature" colSpan={columns.length}>
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
    <CollapseContainer title="Temperature" colSpan={columns.length}>
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
    {data.map((d) => (
      <Row key={d.valueName} data={d} columns={columns} />
    ))}
  </>
);

export default Rows;
