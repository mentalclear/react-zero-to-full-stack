import React, { useEffect } from "react";

export const CongratulationMessage = ({ threshold, onHide }) => {
    return (
        <>
            <h1>Congrats! You've reached {threshold} number of clicks </h1>
            <button onClick={onHide}>Hide</button>
        </>
    );
}