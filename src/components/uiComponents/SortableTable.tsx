import React, { useState } from "react";
import { TableProps } from "./Table";
import { Fruit } from "../../pages/uiElements/TablePage";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

interface SortableTableProps extends TableProps {
  sortValue: (item: Fruit) => string | number;
}

const SortableTable: React.FC<SortableTableProps> = props => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const { config, data } = props;

  const handleclick = (label: string) => {
    if (sortBy && sortBy !== label) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }

    if (sortOrder === null) {
      setSortBy(label);
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortBy(label);
      setSortOrder("desc");
    } else if (sortOrder === "desc") {
      setSortBy(label);
      setSortOrder("asc");
    }
  };

  const updateConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => {
        <th
          className='cursor-pointer hover:bg-gray-100'
          onClick={() => handleclick(column.label)}
        >
          <div className='flex items-center'>
            {getSortIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>;
      },
    };
  });

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue }: any = config.find(column => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <div>SortableTable</div>;
};

const getSortIcons = (
  label: string,
  sortBy: string | null,
  sortOrder: "asc" | "desc" | null
) => {
  if (sortBy !== label) {
    return (
      <div className='flex'>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === "asc") {
    return (
      <div className='flex'>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div className='flex'>
        <GoArrowSmallDown />
      </div>
    );
  } else {
    return (
      <div className='flex'>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
};

export default SortableTable;
