import React, { useReducer, FormEvent } from "react";
import Buttons from "../../components/uiComponents/Buttons";
import produce from "immer";
import Panel from "../../components/uiComponents/Panel";

interface State {
  count: number;
  valueToadd: number;
}

interface Action {
  type:
    | "increment-count"
    | "decrement-count"
    | "setValueToAdd"
    | "submit_form"
    | "reset_count";
  payload?: number;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment-count":
      state.count = state.count + action.payload!;
      return;
    case "decrement-count":
      state.count = state.count - action.payload!;
      return;
    case "setValueToAdd":
      state.valueToadd = action.payload!;
      return;
    case "reset_count":
      state.count = 0;
      return;
    case "submit_form":
      state.count = state.count + state.valueToadd;
      state.valueToadd = 0;
      return;
    default:
      return;
  }
};

const ReducerCounterPage: React.FC = () => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: 0,
    valueToadd: 0,
  });

  const handleincrement = () => {
    dispatch({
      type: "increment-count",
      payload: 1,
    });
  };
  const handledecrement = () => {
    dispatch({
      type: "decrement-count",
      payload: 1,
    });
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch({
      type: "setValueToAdd",
      payload: parseInt(e.currentTarget.value) || 0,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "submit_form",
    });
  };

  const handleRest = () => {
    dispatch({
      type: "reset_count",
    });
  };

  return (
    <Panel className='p-3 border-b mt-3 '>
      <h4 className='text-center mb-5'>Count is : {state.count}</h4>
      <div className='flex flex-row justify-center'>
        <Buttons color='primary' type='outline' onClick={handleincrement}>
          Increament
        </Buttons>
        <Buttons color='warning' type='outline' onClick={handledecrement}>
          Decrement
        </Buttons>

        <form className='form mt-2' onSubmit={handleSubmit}>
          <input
            type='number'
            className='border border-gray-500 py-1 '
            onChange={handleChange}
            value={state.valueToadd || ""}
          />
          <Buttons type='outline' color='primary'>
            Add
          </Buttons>
          <Buttons type='outline' color='secondary' onClick={handleRest}>
            reset
          </Buttons>
        </form>
      </div>
    </Panel>
  );
};

export default ReducerCounterPage;
