import type { ColumnProps, DataProps } from "./BlairTable/types";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment-timezone";
import { css } from "@emotion/css";
import { widthToAdd, heightForOneLine } from "./BlairTable/consts";
import BlairTable from "./BlairTable/BlairTable";

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

const timezone = "America/Los_Angeles";

const calculateRowHeight = (valueType: BanyanValueType, lang: string) => {
  if (valueType === "temperature_c_above_max") {
    if (lang === "en") return heightForOneLine;
  }

  return heightForOneLine;
};

const data: DataProps<BanyanValueType>[] = [
  {
    name: "temperature",
    items: [
      {
        name: "Above Canopy",
        valueType: "temperature_c_above_max",
        height: calculateRowHeight("temperature_c_above_max", "en"),
        values: {
          "2022-07-20T08:00:00.000Z": "85.5°F",
          "2022-07-21T08:00:00.000Z": "86.3°F",
          "2022-07-22T08:00:00.000Z": "89.5°F",
          "2022-07-23T08:00:00.000Z": "83.5°F",
          "2022-07-24T08:00:00.000Z": "82.5°F",
        },
      },
      {
        name: "In Canopy",
        valueType: "temperature_c_in_max",
        height: calculateRowHeight("temperature_c_in_max", "en"),
        values: {
          "2022-07-20T08:00:00.000Z": "86.3°F",
          "2022-07-21T08:00:00.000Z": "85.5°F",
          "2022-07-22T08:00:00.000Z": "86.2°F",
          "2022-07-23T08:00:00.000Z": "87.5°F",
          "2022-07-24T08:00:00.000Z": "86.3°F",
        },
      },
      {
        name: "Below Canopy",
        valueType: "temperature_c_below_max",
        height: calculateRowHeight("temperature_c_below_max", "en"),
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
        valueType: "temperature_inversion",
        height: calculateRowHeight("temperature_inversion", "en"),
        values: {
          "2022-07-20T08:00:00.000Z": "-2.6°F",
          "2022-07-21T08:00:00.000Z": "-2.6°F",
          "2022-07-22T08:00:00.000Z": "-2.6°F",
          "2022-07-23T08:00:00.000Z": "-2.6°F",
          "2022-07-24T08:00:00.000Z": "-2.6°F",
        },
      },
    ],
  },
  {
    name: "humidity",
    items: [
      {
        name: "Above Canopy",
        valueType: "humidity_c_above_max",
        height: calculateRowHeight("humidity_c_above_max", "en"),
        values: {
          "2022-07-20T08:00:00.000Z": "85.5°F",
          "2022-07-21T08:00:00.000Z": "dfjsdk",
          "2022-07-22T08:00:00.000Z": "89.5°F",
          "2022-07-23T08:00:00.000Z": "83.5°F",
          "2022-07-24T08:00:00.000Z": "82.5°F",
        },
      },
      {
        name: "In Canopy",
        valueType: "humidity_c_in_max",
        height: calculateRowHeight("humidity_c_in_max", "en"),
        values: {
          "2022-07-20T08:00:00.000Z": "86.3°F",
          "2022-07-21T08:00:00.000Z": "85.5°F",
          "2022-07-22T08:00:00.000Z": "86.2°F",
          "2022-07-23T08:00:00.000Z": "85.5°F",
          "2022-07-24T08:00:00.000Z": "hello",
        },
      },
      {
        name: "Below Canopy",
        valueType: "humidity_c_below_max",
        height: calculateRowHeight("humidity_c_below_max", "en"),
        values: {
          "2022-07-20T08:00:00.000Z": "88.3°F",
          "2022-07-21T08:00:00.000Z": "89.5°F",
          "2022-07-22T08:00:00.000Z": "87.2°F",
          "2022-07-23T08:00:00.000Z": 478237,
          "2022-07-24T08:00:00.000Z": "84.2°F",
        },
      },
    ],
  },
  {
    name: "WetBulb",
    items: [
      {
        name: "Above Canopy Max",
        valueType: "wetbulb_c_above_max",
        height: calculateRowHeight("wetbulb_c_above_max", "en"),
        values: {
          "2022-07-20T08:00:00.000Z": "85.5°F",
          "2022-07-21T08:00:00.000Z": "hello",
          "2022-07-22T08:00:00.000Z": "85.5°F",
          "2022-07-23T08:00:00.000Z": "83.5°F",
          "2022-07-24T08:00:00.000Z": "82.5°F",
        },
      },
      {
        name: "In Canopy Max",
        valueType: "wetbulb_c_in_max",
        height: calculateRowHeight("wetbulb_c_in_max", "en"),
        values: {
          "2022-07-20T08:00:00.000Z": "86.2°F",
          "2022-07-21T08:00:00.000Z": "85.5°F",
          "2022-07-22T08:00:00.000Z": "86.2°F",
          "2022-07-23T08:00:00.000Z": "87.5°F",
          "2022-07-24T08:00:00.000Z": 47328,
        },
      },
      {
        name: "Below Canopy Max",
        valueType: "wetbulb_c_below_max",
        height: calculateRowHeight("wetbulb_c_below_max", "en"),
        values: {
          "2022-07-20T08:00:00.000Z": "88.3°F",
          "2022-07-21T08:00:00.000Z": "89.5°F",
          "2022-07-22T08:00:00.000Z": "87.2°F",
          "2022-07-23T08:00:00.000Z": 478237,
          "2022-07-24T08:00:00.000Z": "84.2°F",
        },
      },
    ],
  },
];

const firstColumnTitle = "Last Update: June 14th, 10:00 AM";

/**
 * !Getting the width for the first column! (which is important for sticky feature)
 */
const calculateFirstColumnWidth = (
  data: DataProps<BanyanValueType>[],
  title: string
) => {
  let labelLength = title.length;

  data.forEach((d) => {
    if (d.name.length > labelLength) labelLength = d.name.length;

    d.items.forEach((item: any) => {
      if (item.name.length > labelLength) labelLength = item.name.length;
    });
  });

  const firstColumnWidth = labelLength + widthToAdd;

  return firstColumnWidth;
};

/**
 * !columns prop is responsible for width for each row.
 */
const columns: ColumnProps[] = [
  (() => {
    return {
      key: "valueType",
      dataIndex: "valueType",
      title: firstColumnTitle,
      cellCSS: { padding: "12px" },
      width: calculateFirstColumnWidth(data, firstColumnTitle),
    };
  })(),
  ...dates.map((d, index) => {
    const momentOfDate = moment.tz(d, timezone);
    const todayMoment = moment.tz(timezone);

    const width = 80;

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

function Collapse() {
  return (
    <div
      className={css`
        width: 600px;
        margin: 0 auto;
      `}
    >
      <div
        className={css`
          margin: 10px 0;
        `}
      >
        <Link to="/">Go to the draggable table</Link>
      </div>

      <BlairTable columns={columns} data={data} height={600} />
    </div>
  );
}

export default Collapse;
