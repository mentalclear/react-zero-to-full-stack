import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { parse } from 'query-string';
import { CounterButton } from '../CounterButton';
import { CongratulationMessage } from '../CongratulationMessage'


export const CounterButtonPage = () => {
  const location = useLocation();
  const startingValue = parse(location.search).startingValue;
  const [numberOfClicks, setNumberOfCliccks] = useState(Number(startingValue));
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfCliccks(numberOfClicks + 1);

  return (
    <>
      <h1>Counter Button Page</h1>
      {hideMessage
        ? null
        : <CongratulationMessage
          numberOfClicks={numberOfClicks}
          threshold={10}
          onHide={() => setHideMessage(true)} />}
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
    </>
  );
}