import { ColumnProps } from "../../types";
import Cell from "./Cell/Cell";
import FirstCell from "./FirstCell/FirstCell";

const Header = ({ columns }: { columns: ColumnProps[] }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          if (index === 0)
            return (
              <FirstCell
                key={column.key}
                {...(column.width && { width: column.width })}
              >
                {column.title}
              </FirstCell>
            );

          return (
            <Cell
              key={column.key}
              {...(column.width && { width: column.width })}
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
