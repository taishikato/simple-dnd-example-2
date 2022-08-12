import { css } from "@emotion/css";
import Table from "./Table/Table";
import type { ColumnProps, DataProps } from "./types";
import moment from "moment";
import "moment-timezone";

export type BanyanValueType =
  | "temperature_c_above_max"
  | "temperature_c_in_max"
  | "temperature_c_below_max"
  | "temperature_inversion"
  | "humidity_c_above_max"
  | "humidity_c_below_max"
  | "humidity_c_in_max"
  | "wetbulb_c_above_max"
  | "wetbulb_c_in_max"
  | "wetbulb_c_below_max";

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
  {
    name: "Humidity - Above Canopy Max",
    valueName: "humidity_c_above_max",
    values: {
      "2022-07-20T08:00:00.000Z": "85.5°F",
      "2022-07-21T08:00:00.000Z": "dfjsdk",
      "2022-07-22T08:00:00.000Z": "89.5°F",
      "2022-07-23T08:00:00.000Z": "83.5°F",
      "2022-07-24T08:00:00.000Z": "82.5°F",
    },
  },
  {
    name: "Humidity - In Canopy Max",
    valueName: "humidity_c_in_max",
    values: {
      "2022-07-20T08:00:00.000Z": "86.3°F",
      "2022-07-21T08:00:00.000Z": "85.5°F",
      "2022-07-22T08:00:00.000Z": "86.2°F",
      "2022-07-23T08:00:00.000Z": (
        <div
          className={css`
            padding: 20px;
            border-radius: 10px;
            background-color: green;
            width: 100px;
            color: white;
          `}
        >
          div test
        </div>
      ),
      "2022-07-24T08:00:00.000Z": "hello",
    },
  },
  {
    name: "Humidity - Below Canopy Max",
    valueName: "humidity_c_below_max",
    values: {
      "2022-07-20T08:00:00.000Z": "88.3°F",
      "2022-07-21T08:00:00.000Z": "89.5°F",
      "2022-07-22T08:00:00.000Z": "87.2°F",
      "2022-07-23T08:00:00.000Z": 478237,
      "2022-07-24T08:00:00.000Z": "84.2°F",
    },
  },
  {
    name: "WetBulb - Above Canopy Max",
    valueName: "wetbulb_c_above_max",
    values: {
      "2022-07-20T08:00:00.000Z": "85.5°F",
      "2022-07-21T08:00:00.000Z":
        "testfhdshfjkdshfjshfdsjfhdjshfjdshfjdshfjdshfkjhsdjkfhsdkjahfkjdsahfjdksahfjksdhfjksdahfjkdsahfjksdah",
      "2022-07-22T08:00:00.000Z": (
        <img
          src="https://img.devrant.com/devrant/rant/r_3015646_HZCi4.jpg"
          className={css`
            width: 200px;
            border-radius: 10px;
          `}
        />
      ),
      "2022-07-23T08:00:00.000Z": "83.5°F",
      "2022-07-24T08:00:00.000Z": "82.5°F",
    },
  },
  {
    name: "WetBulb - In Canopy Max",
    valueName: "wetbulb_c_in_max",
    values: {
      "2022-07-20T08:00:00.000Z": (
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--iaqAI9Jj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/Q3cUg29.gif"
          className={css`
            width: 150px;
            border-radius: 10px;
          `}
        />
      ),
      "2022-07-21T08:00:00.000Z": "85.5°F",
      "2022-07-22T08:00:00.000Z": "86.2°F",
      "2022-07-23T08:00:00.000Z": "87.5°F",
      "2022-07-24T08:00:00.000Z": 47328,
    },
  },
  {
    name: "WetBulb - Below Canopy Max",
    valueName: "wetbulb_c_below_max",
    values: {
      "2022-07-20T08:00:00.000Z": "88.3°F",
      "2022-07-21T08:00:00.000Z": "89.5°F",
      "2022-07-22T08:00:00.000Z": "87.2°F",
      "2022-07-23T08:00:00.000Z": 478237,
      "2022-07-24T08:00:00.000Z": "84.2°F",
    },
  },
];

const timezone = "America/Los_Angeles";

const columns: ColumnProps[] = [
  (() => {
    return {
      key: "valueName",
      dataIndex: "valueName",
      title: "Last Update: June 14th, 10:00 AM",
      // render,
      width: "150px",
      cellCSS: { padding: "12px" },
    };
  })(),
  ...dates.map((d, index) => {
    const momentOfDate = moment.tz(d, timezone);
    const todayMoment = moment.tz(timezone);

    const width = "55px";

    let cellCSS;

    // if (todayMoment.isSame(momentOfDate, "day")) customClass = "blueBg";
    if (index === 1)
      cellCSS = {
        backgroundColor: "blue",
        color: "white",
      };

    let headerCellCSS;

    if (index === 2)
      headerCellCSS = {
        color: "white",
        backgroundColor: "purple",
      };

    return {
      key: d,
      dataIndex: d,
      title: momentOfDate.format("MMM D"),
      cellCSS,
      headerCellCSS,
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
      <Table
        data={tableDataRaw}
        columns={columns}
        isFirstColumnSticky
        isHeaderSticky
      />
    </div>
  );
}

export default App;
