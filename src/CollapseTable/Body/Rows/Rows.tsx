import { css, cx } from "@emotion/css";
import { ColumnProps, DataProp } from "../../types";
import CollapseContainer from "../CollapseContainer/CollapseContainer";
import CollapseContainer2 from "../CollapseContainer2/CollapseContainer2";
import Row from "./Row/Row";
import Cell from "../Cells/Cell";

const Rows = <T extends string>({
  data,
  columns,
}: {
  data: DataProp<T>[];
  columns: ColumnProps[];
}) => {
  return (
    <>
      {data.map((d) => {
        return (
          <CollapseContainer2
            title={d.name}
            colSpan={columns.length}
            key={d.name}
          >
            <>
              {d.values.map((v) => {
                return <Row key={v.valueName} data={v} columns={columns} />;
              })}
            </>
          </CollapseContainer2>
        );
      })}
      {/* <CollapseContainer2 title="Temperature" colSpan={columns.length}>
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
      </CollapseContainer2> */}
      {/*<CollapseContainer title="Humidity" colSpan={columns.length}>
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
      {/* {data.map((d) => (
        <Row key={d.valueName} data={d} columns={columns} />
      ))} */}
    </>
  );
};

export default Rows;
