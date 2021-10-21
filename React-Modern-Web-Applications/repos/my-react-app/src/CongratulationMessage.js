import React, { useEffect } from "react";
import { Button } from "./Button";

export const CongratulationMessage = ({ threshold, onHide }) => {
    return (
        <>
            <h1>Congrats! You've reached {threshold} number of clicks </h1>
            <Button onClick={onHide}>Hide</Button>
        </>
    );
}