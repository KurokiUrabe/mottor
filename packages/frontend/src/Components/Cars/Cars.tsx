import React from "react";
import { IKraftfahrzeug } from "../../entities/kraftfahrzeug";
import Car from "./Car";

type CarsProps = {
  cars: Array<IKraftfahrzeug>;
};

const Cars: React.FC<CarsProps> = ({ cars }) => {
  const carsComponent = cars.map((car) => {
    return <Car car={car} />;
  });
  return <div>{carsComponent}</div>;
};

export default Cars;
