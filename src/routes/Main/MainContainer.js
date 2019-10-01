import React, { useState, useEffect } from 'react';
import MainPresenter from './MainPresenter';

const Main = () => {
  const [value, setValue] = useState([]);
  const [cal, setCal] = useState(0);
  const [result, setResult] = useState(0);
  const [func, setFunc] = useState('');

  const handleNumber = num => {
    if (num) {
      setValue([...value, num]);
    }
  };

  const handleCal = math => {
    setCal(Number(value.join('')));
    setValue([]);
    if (math === '+') {
      setFunc('+');
    } else if (math === '-') {
      setFunc('+');
    } else if (math === '*') {
      setFunc('*');
    } else if (math === '/') {
      setFunc('/');
    }
  };

  const handleResult = () => {
    if (func === '+') {
      setResult(cal + Number(value.join('')));
    } else if (func === '-') {
      setResult(cal - Number(value.join('')));
    } else if (func === '*') {
      setResult(cal * Number(value.join('')));
    } else if (func === '/') {
      setResult(cal / Number(value.join('')));
    }
  };

  const handleReset = () => {
    setResult(0);
    setValue([]);
    setCal(0);
  };

  console.log(result);
  return (
    <MainPresenter
      handleNumber={handleNumber}
      handleCal={handleCal}
      handleResult={handleResult}
      handleReset={handleReset}
      result={result}
      value={value}
      cal={cal}
    />
  );
};

export default Main;
