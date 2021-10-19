import React, { useEffect } from "react";

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    // This will not work because react will not rerender the component
    // if no props or hooks have changed - so below will not work:
    // let numberOfClicks = 0;

    // const increment = () => {
    //     numberOfClicks = numberOfClicks + 1;
    //     console.log(numberOfClicks);
    // }
    useEffect(() => {
        console.log('useEffect function called!');

        return () => console.log('unmounting!')
    }, []);


    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={onIncrement}>Click Me!</button>
        </>
    );
}