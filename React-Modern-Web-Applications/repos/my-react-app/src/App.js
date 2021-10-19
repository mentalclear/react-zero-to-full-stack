import './App.css';
import React, { useState } from 'react';
import { CounterButton } from './CounterButton';
import { CongratulationMessage } from './CongratulationMessage';

function App() {
  const [numberOfClicks, setNumberOfCliccks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfCliccks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage
          ? null
          : <CongratulationMessage
            numberOfClicks={numberOfClicks}
            threshold={10}
            onHide={() => setHideMessage(true)} />}
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
      </header>
    </div>
  );
}

export default App;
