import React from "react";
// import SortableTable from "../../components/uiComponents/SortableTable";
import Table from "../../components/uiComponents/Table";

export interface Fruit {
  name: string;
  color: string;
  score: number;
}

interface Config {
  label: string;
  render: (item: Fruit) => React.ReactNode;
  header?: () => React.ReactNode;
  sortValue?: (item: Fruit) => string | number;
}

const TablePage: React.FC = () => {
  const data: Fruit[] = [
    { name: "Orange", color: "bg-orange-600", score: 1 },
    { name: "Apple", color: "bg-red-600", score: 2 },
    { name: "Banana", color: "bg-yellow-600", score: 3 },
    { name: "Water Melon", color: "bg-green-600", score: 4 },
    { name: "Annar", color: "bg-red-800", score: 5 },
  ];

  const config: Config[] = [
    {
      label: "name",
      render: fruit => fruit.name,
      sortValue: fruit => fruit.name,
    },

    {
      label: "color",
      render: fruit => <div className={`p-3 w-2 ${fruit.color} rounded`} />,
      sortValue: fruit => fruit.color,
    },

    {
      label: "score",
      render: fruit => fruit.score,
      sortValue: fruit => fruit.score,
    },
    {
      label: "MRP",
      render: fruit => fruit.score ** 2,
      sortValue: fruit => fruit.score ** 2,
    },
  ];

  const keyfn = (fruit: Fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyfn={keyfn} />
    </div>
  );
};

export default TablePage;
