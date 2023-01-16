import React from "react";
import AccordonsPage from "./uiElements/AccordonsPage";
import ButtonPage from "./uiElements/ButtonPage";
import DropdownPage from "./uiElements/DropdownPage";
import ModalPage from "./uiElements/ModalPage";
import ReducerCounterPage from "./uiElements/ReducerCounterPage";
import TablePage from "./uiElements/TablePage";

const UiElements = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-4 mt-5'>
        <div>
          <h3 className='text-center'>Accodion Example</h3>
          <AccordonsPage />
        </div>
        <div>
          <h3 className='text-center'>Dropdown Example</h3>
          <DropdownPage />
        </div>
        <div>
          <h3 className='text-start'>Buttons Example</h3>
          <ButtonPage />
        </div>
        <div>
          <h3 className='text-center'>Modal Example</h3>
          <ModalPage />
        </div>
        <div className='col-span-2 mr-20'>
          <h3 className='text-center'>Reducer Counter Example</h3>
          <ReducerCounterPage />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-5'>
        <div className='col-start-1 col-end-7'>
          <h3 className='text-center font-bold'>Table Example</h3>
          <TablePage />
        </div>
      </div>
    </>
  );
};

export default UiElements;
