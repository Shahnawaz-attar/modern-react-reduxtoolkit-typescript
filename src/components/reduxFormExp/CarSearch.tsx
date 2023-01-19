import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store/index";
import { CarState } from "../../store/slices/carSlice";

const CardSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector<CarState, string>(state => {
    return state.searchTerm;
  });

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <form className='m-2'>
      <div className='flex justify-start w-full'>
        <input
          type='text'
          onChange={handlechange}
          value={searchTerm}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none'
          placeholder='Search car'
        />
        <button
          type='submit'
          className='ml-2 px-3 py-1 bg-blue-400 text-white rounded'
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default CardSearch;
