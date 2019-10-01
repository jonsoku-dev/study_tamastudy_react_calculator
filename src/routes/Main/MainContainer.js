import React, { useState, useEffect } from 'react';
import MainPresenter from './MainPresenter';

const Main = () => {
  const [value, setValue] = useState([]);

  const handleNumber = num => {
    setValue([...value, num]);
  };

  const handleCal = f => {
    setValue([...value, f]);
  };

  const handleReset = () => {
    setValue([]);
  };

  console.log(value);

  return <MainPresenter handleNumber={handleNumber} handleCal={handleCal} value={value} />;
};

export default Main;
