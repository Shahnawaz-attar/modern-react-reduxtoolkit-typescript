import React, { Fragment, FunctionComponent } from "react";
import { Fruit } from "../../pages/uiElements/TablePage";

export interface TableProps {
  data: Fruit[];
  config: {
    label: string;
    render: (item: Fruit) => React.ReactNode;
    header?: (() => React.ReactNode) | undefined;
    sortValue?: ((item: Fruit) => string | number) | undefined;
  }[];
  keyfn: (item: Fruit) => string;
}

const Table: FunctionComponent<TableProps> = ({ data, config, keyfn }) => {
  const renderTbodyRows = data.map((item: Fruit, i) => {
    const renderCells = config.map(column => {
      return (
        <td className='p-2' key={column.label}>
          {column.render(item)}
        </td>
      );
    });

    return (
      <tr key={keyfn(item)} className='border-b'>
        {renderCells}
      </tr>
    );
  });

  const renderTableLabels = config.map(column => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return (
      <th key={column.label} className='p-3 text-start'>
        {column.label}
      </th>
    );
  });

  return (
    <div className='flex justify-center align-center items-center mt-10 px-20 pb-20'>
      <table border={1} className='table-auto border-spacing-2 w-full '>
        <thead>
          <tr className='border-b-2'>{renderTableLabels}</tr>
        </thead>
        <tbody>{renderTbodyRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
