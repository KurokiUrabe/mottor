import React from "react";
import { IKraftfahrzeug } from "../../entities/kraftfahrzeug";

type CarProps = {
  car: IKraftfahrzeug;
};

const Car: React.FC<CarProps> = ({ car }) => {
  return (
    <div>
      <div>{car.description}</div>
      <div>{car.estimateDate}</div>
      <div>{car.id}</div>
      <div>{car.image}</div>
      <div>{car.km}</div>
      <div>{car.make}</div>
      <div>{car.model}</div>
    </div>
  );
};

export default Car;
