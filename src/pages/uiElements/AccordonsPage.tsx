import React from "react";
import Accordion from "../../components/uiComponents/Accordion";

export interface AccordingItems {
  id: number;
  title: string;
  content: string;
}

const accordingData: AccordingItems[] = [
  {
    id: 1,
    title: "title 1 ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius rem quod asperiores veritatis commodi at. Sequi consectetur dignissimos, cumque animi ratione laboriosam quis. Accusantium placeat omnis alias ipsam ipsa.",
  },
  {
    id: 2,
    title: "title 2 ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius rem quod asperiores veritatis commodi at. Sequi consectetur dignissimos, cumque animi ratione laboriosam quis. Accusantium placeat omnis alias ipsam ipsa.",
  },
  {
    id: 3,
    title: "title 3 ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius rem quod asperiores veritatis commodi at. Sequi consectetur dignissimos, cumque animi ratione laboriosam quis. Accusantium placeat omnis alias ipsam ipsa.",
  },
];

const AccordonsPage: React.FC = () => {
  return (
    <div className='w-full px-20'>
      <Accordion accordingData={accordingData} />
    </div>
  );
};

export default AccordonsPage;
