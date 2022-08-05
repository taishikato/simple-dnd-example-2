import { css } from "@emotion/css";
import Table from "./Table/Table";
import type { ColumnProps, DataProps } from "./types";
import moment from "moment";
import "moment-timezone";

export type BanyanValueType =
  | "temperature_c_above_max"
  | "temperature_c_in_max"
  | "temperature_c_below_max"
  | "temperature_inversion";

// const valueToRowRendererMapper: Record<BanyanValueType, React.FC<CellProps>> = {
//   temperature_c_above_max: CellTemperatureCAboveMax,
//   temperature_c_in_max: CellTemperatureCInMax,
//   temperature_c_below_max: CellTemperatureCBelowMax,
// };

const dates = [
  "2022-07-20T08:00:00.000Z",
  "2022-07-21T08:00:00.000Z",
  "2022-07-22T08:00:00.000Z",
  "2022-07-23T08:00:00.000Z",
  "2022-07-24T08:00:00.000Z",
];

const tableDataRaw: DataProps<BanyanValueType>[] = [
  {
    name: "Temperature - Above Canopy Max",
    valueName: "temperature_c_above_max",
    values: {
      "2022-07-20T08:00:00.000Z": "85.5°F",
      "2022-07-21T08:00:00.000Z": (
        <img
          src="https://media.npr.org/assets/img/2022/07/14/lofi-girl-picture_custom-27a34c6d0ca36f828940156e7bd3c964140cff9c.jpg"
          className={css`
            width: 300px;
            border-radius: 10px;
          `}
        />
      ),
      "2022-07-22T08:00:00.000Z": "89.5°F",
      "2022-07-23T08:00:00.000Z": "83.5°F",
      "2022-07-24T08:00:00.000Z": "82.5°F",
    },
  },
  {
    name: "Temperature - In Canopy Max",
    valueName: "temperature_c_in_max",
    values: {
      "2022-07-20T08:00:00.000Z": "86.3°F",
      "2022-07-21T08:00:00.000Z": "85.5°F",
      "2022-07-22T08:00:00.000Z": "86.2°F",
      "2022-07-23T08:00:00.000Z": "87.5°F",
      "2022-07-24T08:00:00.000Z": (
        <div
          className={css`
            padding: 20px;
            border-radius: 10px;
            background-color: pink;
          `}
        >
          div test
        </div>
      ),
    },
  },
  {
    name: "Temperature - Below Canopy Max",
    valueName: "temperature_c_below_max",
    values: {
      "2022-07-20T08:00:00.000Z": "88.3°F",
      "2022-07-21T08:00:00.000Z": "89.5°F",
      "2022-07-22T08:00:00.000Z": "87.2°F",
      "2022-07-23T08:00:00.000Z": 478237,
      "2022-07-24T08:00:00.000Z": "84.2°F",
    },
  },
  {
    name: "Inversion",
    valueName: "temperature_inversion",
    values: {
      "2022-07-20T08:00:00.000Z": "-2.6°F",
      "2022-07-21T08:00:00.000Z": "-2.6°F",
      "2022-07-22T08:00:00.000Z": "-2.6°F",
      "2022-07-23T08:00:00.000Z": "-2.6°F",
      "2022-07-24T08:00:00.000Z": "-2.6°F",
    },
  },
];

const timezone = "America/Los_Angeles";

const columns: ColumnProps[] = [
  (() => {
    // const render = (title: string) => {
    //   return <CustomBodyThContent title={title} />;
    // };

    return {
      key: "valueName",
      dataIndex: "valueName",
      title: "Last Update: June 14th, 10:00 AM",
      // render,
      width: "300px",
      cellCSS: { padding: "12px" },
    };
  })(),
  ...dates.map((d) => {
    const momentOfDate = moment.tz(d, timezone);
    const todayMoment = moment.tz(timezone);

    const width = "55px";

    let cellCSS;

    if (todayMoment.isSame(momentOfDate, "day"))
      cellCSS = { background: "blue", color: "#ffffff" };

    // const render = (
    //   val: string,
    //   row: DataProps<BanyanValueType>,
    //   cellCSS: any,
    //   width: string
    // ) => {
    //   const ComponentToUse = valueToRowRendererMapper[row.valueName];

    //   if (!ComponentToUse) return null;

    //   return (
    //     <ComponentToUse
    //       val={val}
    //       row={row}
    //       key={d}
    //       cellCSS={cellCSS}
    //       width={width}
    //     />
    //   );
    // };

    return {
      key: d,
      dataIndex: d,
      title: momentOfDate.format("MMM D"),
      cellCSS,
      // render,
      width,
    };
  }),
];

function App() {
  return (
    <div
      className={css`
        width: 600px;
        margin: 0 auto;
      `}
    >
      <Table data={tableDataRaw} columns={columns} />
    </div>
  );
}

export default App;
