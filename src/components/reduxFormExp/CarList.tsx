import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../../store";
import CarValue from "./CarValue";
import { RootState } from "../../store";
import { Car } from "../../store/slices/carSlice";
import Panel from "../uiComponents/Panel";
import { GoTrashcan } from "react-icons/go";
import CardSearch from "./CarSearch";

const CarList = () => {
  const dispatch = useDispatch();
  const {
    cars,
    searchTerm,
    form: { name },
  } = useSelector((state: RootState) => {
    const filteredCars = state.car.cars.filter(car =>
      car.name.toLowerCase().includes(state.car.searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      searchTerm: state.car.searchTerm,
      form: state.form,
    };
  });

  const handleCarDelete = (car: Car) => {
    dispatch(removeCar(car.id));
  };

  const carList = cars.map((car: Car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div
        key={car.id}
        className='flex justify-between bg-gray-200 p-3 rounded mb-2'
        role='alert'
      >
        <div className={`${bold && "text-bold"}  `}>
          <span>{car.name}</span> --
          <span> ${car.cost} </span>
        </div>
        <button
          onClick={() => {
            handleCarDelete(car);
          }}
          className='text-white bg-red-700 p-1 rounded'
        >
          <GoTrashcan />
        </button>
      </div>
    );
  });

  return (
    <div className='container '>
      <div className='row'>
        <div className='col-lg-8 mx-auto'>
          <div className='card'>
            <Panel>
              <div className='card-header'>
                <h3 className='text-center text-bold'> Card List</h3>
                <CardSearch />
              </div>
              <div className='card-body'>{carList}</div>
            </Panel>
            <CarValue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
