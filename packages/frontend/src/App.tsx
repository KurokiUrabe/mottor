import React, { useEffect, useState } from "react";
import Cars from "./Components/Cars/Cars";

import axios from "axios";
import "./App.css";

const App: React.FC = () => {
  // const [carsRequest, setCars] = useState({ loading: false, cars: [] });
  // useEffect(() => {
  //   setCars({ loading: false, cars: [] });
  //   axios.get(`http://localhost:3002/api/Kraftfahrzeug/all`).then((res) => {
  //     const cars = res.data;
  //     console.log({ cars });

  //     setCars({ loading: true, cars });
  //   });
  //   console.log(`yummy`);
  // });
  // const { loading, cars } = carsRequest;
  return (
    <div className="App">
      {loading && "Loading..."}
      <Cars cars={cars} />
    </div>
  );
};

export default App;
