import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName } from "../../store";
import { RootState } from "../../store";

const CarForm: React.FC = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state: RootState) => {
    return state.form;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "carName") {
      dispatch(changeName(e.target.value));
    } else {
      dispatch(changeCost(parseInt(e.target.value) || 0));
    }
  };

  return (
    <form className='p-2'>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='carName'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          required
          value={name}
          onChange={handleChange}
        />
        <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Car Name
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='number'
          name='carCost'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          required
          value={cost}
          onChange={handleChange}
        />
        <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Car Cost
        </label>
      </div>

      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Add
      </button>
    </form>
  );
};

export default CarForm;
