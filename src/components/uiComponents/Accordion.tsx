import React, { useState } from "react";
import { AccordingItems as AccodingInterface } from "../../pages/uiElements/AccordonsPage";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface Props {
  accordingData: AccodingInterface[];
}

const Accordion: React.FC<Props> = ({ accordingData }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const renderItems = accordingData.map(({ title, id, content }, ind) => {
    const isExpanded = expandedIndex === ind;

    const handleClick = (index: number) => {
      if (index === expandedIndex) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(ind);
      }
    };

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={id}>
        <div
          className='flex items-center justify-between bg-gray border-b p-3'
          onClick={() => handleClick(ind)}
        >
          {title} {icon}
        </div>
        {isExpanded && (
          <div className='col-span-9 mt-5 p-3 border-b border-w-20'>
            {content}
          </div>
        )}
      </div>
    );
  });

  return <div>{renderItems}</div>;
};

export default Accordion;
