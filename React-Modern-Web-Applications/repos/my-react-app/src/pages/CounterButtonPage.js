import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { parse } from 'query-string';
import { CounterButton } from '../CounterButton';
import { CongratulationMessage } from '../CongratulationMessage'
import { DisplayIf } from "../DisplayIf";


export const CounterButtonPage = () => {
  const location = useLocation();
  const startingValue = parse(location.search).startingValue || 0;
  const [numberOfClicks, setNumberOfCliccks] = useState(Number(startingValue));
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfCliccks(numberOfClicks + 1);

  return (
    <>
      <h1>Counter Button Page</h1>
      <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
        <CongratulationMessage
          threshold={10}
          onHide={() => setHideMessage(true)} />
      </DisplayIf>
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
    </>
  );
}