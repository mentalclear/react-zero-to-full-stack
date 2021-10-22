import React, { useState, useEffect } from "react";
import { CounterButton } from '../CounterButton';
import { CongratulationMessage } from '../CongratulationMessage'
import { DisplayIf } from "../DisplayIf";
import { usePersistentState } from "../usePersistentState";


export const CounterButtonPage = () => {
  const [numberOfClicks, setNumberOfCliccks] = usePersistentState('numberOfClicks', 0, Number);
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