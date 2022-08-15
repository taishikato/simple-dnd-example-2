import Cell from "./Cell/Cell";
import FirstCell from "./FirstCell/FirstCell";
import type { ColumnProps } from "../types";

const Header = ({ columns }: { columns: ColumnProps[] }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          if (index === 0)
            return (
              <FirstCell
                key={column.key}
                width={column.width}
                headerCellCSS={column.headerCellCSS}
              >
                {column.title}
              </FirstCell>
            );

          return (
            <Cell
              key={column.key}
              width={column.width}
              headerCellCSS={column.headerCellCSS}
            >
              {column.title}
            </Cell>
          );
        })}
      </tr>
    </thead>
  );
};

export default Header;
