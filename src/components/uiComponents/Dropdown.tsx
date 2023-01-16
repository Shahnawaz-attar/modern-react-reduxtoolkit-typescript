import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "../../pages/uiElements/DropdownPage";
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";

interface Props {
  optionsList: Array<Dropdown>;
  value: string | undefined;
  handleSelectOption: (value: string) => void;
}

const DropDown: React.FC<Props> = ({
  optionsList,
  value,
  handleSelectOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const devElem = useRef<HTMLDivElement | null>(null);

  const handleSelect = (option: string) => {
    setIsOpen(false);
    handleSelectOption(option);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!devElem.current) {
        return;
      }

      if (!devElem.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const renderDropDown = optionsList.map(({ value, label }) => {
    return (
      <div
        key={value}
        className='hover:bg-sky-100 rounded cursor-pointer p-3'
        onClick={() => {
          handleSelect(label);
        }}
      >
        {label}
      </div>
    );
  });

  return (
    <div ref={devElem} className='w-72 relative '>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value || "select ..."}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderDropDown}</Panel>}
    </div>
  );
};

export default DropDown;
