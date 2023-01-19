import React from "react";
import CarForm from "../../components/reduxFormExp/CarForm";
import CarList from "../../components/reduxFormExp/CarList";
import Panel from "../../components/uiComponents/Panel";

const ReduxForm = () => {
  return (
    <div className='mt-5'>
      <h1 className='text-center text-xl font-bold'>React Redux Form </h1>
      <div className='grid grid-cols-6 gap-6 mt-5'>
        <div className='col-start-2 col-end-4   ...'>
          <Panel>
            <CarForm />
          </Panel>
        </div>
        <div className='col-start-4 col-end-6   ...'>
          <Panel>
            <CarForm />
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default ReduxForm;
