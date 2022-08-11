import { ColumnProps } from "../../types";
import Cell from "./Cell/Cell";
import FirstCell from "./FirstCell/FirstCell";

const Header = ({
  columns,
  isFirstColumnSticky,
  isHeaderSticky,
}: {
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
  isHeaderSticky: boolean;
}) => (
  <thead>
    <tr>
      {columns.map((column, index) => {
        if (index === 0)
          return (
            <FirstCell
              key={column.key}
              {...(column.width && { width: column.width })}
              isFirstColumnSticky={isFirstColumnSticky}
              isHeaderSticky={isHeaderSticky}
            >
              {column.title}
            </FirstCell>
          );

        return (
          <Cell
            key={column.key}
            {...(column.width && { width: column.width })}
            isHeaderSticky={isHeaderSticky}
          >
            {column.title}
          </Cell>
        );
      })}
    </tr>
  </thead>
);

export default Header;
