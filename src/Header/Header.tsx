import { css } from "@emotion/css";

const Header = () => {
  return (
    <thead>
      <tr>
        <th
          className={css`
            min-width: 150px;
            vertical-align: middle;
            padding: 10px 10px 10px 0;
            text-align: left;
            border-bottom: 1px solid #0b1424;
            position: sticky;
            top: 0px;
            left: 0;
            z-index: 20;
            background-color: #ffffff;
          `}
        >
          Th1
        </th>
        <th
          className={css`
            vertical-align: middle;
            padding: 10px;
            border-bottom: 1px solid #0b1424;
            position: sticky;
            top: 0;
            z-index: 10;
            background-color: #ffffff;
          `}
        >
          Th2
        </th>
        <th
          className={css`
            vertical-align: middle;
            padding: 10px;
            border-bottom: 1px solid #0b1424;
            position: sticky;
            top: 0;
            z-index: 10;
            background-color: #ffffff;
          `}
        >
          Th3
        </th>
        <th
          className={css`
            vertical-align: middle;
            padding: 10px;
            border-bottom: 1px solid #0b1424;
            position: sticky;
            top: 0;
            z-index: 10;
            background-color: #ffffff;
          `}
        >
          Th4
        </th>
        <th
          className={css`
            vertical-align: middle;
            padding: 10px;
            border-bottom: 1px solid #0b1424;
            position: sticky;
            top: 0;
            z-index: 10;
            background-color: #ffffff;
          `}
        >
          Th5
        </th>
        <th
          className={css`
            vertical-align: middle;
            padding: 10px;
            border-bottom: 1px solid #0b1424;
            position: sticky;
            top: 0;
            z-index: 10;
            background-color: #ffffff;
          `}
        >
          Th6
        </th>
      </tr>
    </thead>
  );
};

export default Header;
