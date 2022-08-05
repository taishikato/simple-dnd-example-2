import { css } from "@emotion/css";

const Body = ({ items }: { items: any }) => {
  return (
    <tbody>
      {items.map((r: any) => {
        return (
          <tr
            key={r.key}
            {...r.events}
            className={css`
              cursor: grab;
              position: relative;
              touch-action: none;
            `}
          >
            <th
              className={css`
                min-width: 130px;
                vertical-align: middle;
                padding: 10px 10px 10px 0;
                text-align: left;
                font-weight: 600;
                user-select: none;
                box-sizing: border-box;
                border-bottom: 1px solid rgb(203 213 225);
                position: sticky;
                left: 0;
                box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.1);
                background-color: #ffffff;
              `}
            >
              {r.value.header}
            </th>
            <td
              className={css`
                padding: 10px;
                vertical-align: middle;
                background-color: #ffffff;
                padding: 10px;
                text-align: center;
                font-weight: 600;
                user-select: none;
                box-sizing: border-box;
                border-bottom: 1px solid rgb(203 213 225);
                &:not(:last-child) {
                  border-right: 1px solid rgb(203 213 225);
                }
              `}
            >
              td 1
            </td>
            <td
              className={css`
                padding: 10px;
                vertical-align: middle;
                background-color: #ffffff;
                padding: 10px;
                text-align: center;
                font-weight: 600;
                user-select: none;
                box-sizing: border-box;
                border-bottom: 1px solid rgb(203 213 225);
                &:not(:last-child) {
                  border-right: 1px solid rgb(203 213 225);
                }
              `}
            >
              td 2
            </td>
            <td
              className={css`
                padding: 10px;
                vertical-align: middle;
                background-color: #ffffff;
                padding: 10px;
                text-align: center;
                font-weight: 600;
                user-select: none;
                box-sizing: border-box;
                border-bottom: 1px solid rgb(203 213 225);
                &:not(:last-child) {
                  border-right: 1px solid rgb(203 213 225);
                }
              `}
            >
              {r.value.value}
            </td>
            <td
              className={css`
                padding: 10px;
                vertical-align: middle;
                background-color: #ffffff;
                padding: 10px;
                text-align: center;
                font-weight: 600;
                user-select: none;
                box-sizing: border-box;
                border-bottom: 1px solid rgb(203 213 225);
                &:not(:last-child) {
                  border-right: 1px solid rgb(203 213 225);
                }
              `}
            >
              td 4
            </td>
            <td
              className={css`
                padding: 10px;
                vertical-align: middle;
                background-color: #ffffff;
                padding: 10px;
                text-align: center;
                font-weight: 600;
                user-select: none;
                box-sizing: border-box;
                border-bottom: 1px solid rgb(203 213 225);
                &:not(:last-child) {
                  border-right: 1px solid rgb(203 213 225);
                }
              `}
            >
              td 5
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Body;
