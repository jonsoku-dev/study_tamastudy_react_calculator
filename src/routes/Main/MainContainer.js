import React, { useState, useEffect } from 'react';
import MainPresenter from './MainPresenter';

const Main = () => {
  const [value, setValue] = useState([]);
  const [cal, setCal] = useState(0);
  const [func, setFunc] = useState(false);

  const handleNumber = (num, math) => {
    if (num === null && math) {
      setValue([...value, math]);
    } else if (num && math === undefined) {
      setValue([...value, num]);
    }
  };

  // const test = Number(value.join(''));
  // setCal(test);

  console.log(value);
  return <MainPresenter handleNumber={handleNumber} value={value} cal={cal} />;
};

export default Main;
