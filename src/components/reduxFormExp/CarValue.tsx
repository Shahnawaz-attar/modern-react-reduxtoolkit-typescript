import React from "react";
import { useSelector } from "react-redux";
import { CarState, Car } from "../../store/slices/carSlice";
import { RootState } from "../../store";

const CarValue: React.FC = () => {
  const totalCost = useSelector((state: RootState) =>
    state.car.cars
      .filter((car: Car) =>
        car.name.toLowerCase().includes(state.car.searchTerm.toLowerCase())
      )
      .reduce((acc, car: Car) => (acc += car.cost), 0)
  );

  return <div className='p-3'>Toatal Car Cost: ${totalCost} </div>;
};

export default CarValue;
