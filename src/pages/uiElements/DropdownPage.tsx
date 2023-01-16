import React, { useState } from "react";
import DropDown from "../../components/uiComponents/Dropdown";

export interface Dropdown {
  label: string;
  value: string;
}

const optionsList: Array<Dropdown> = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
];

const DropdownPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className='flex items-center justify-center w-full px-20 mt-5'>
      <DropDown
        optionsList={optionsList}
        value={selectedOption}
        handleSelectOption={handleSelectOption}
      />
    </div>
  );
};

export default DropdownPage;
