import React from "react";
import { Button } from "../Button";

export const UncontrolledFormPage = () => {
    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const favoriteColorInput = React.createRef();

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input
                    ref={nameInput}
                    type="text"
                    placeholder="Name" />
            </div>
            <div>
                <input
                    ref={emailInput}
                    type="email"
                    placeholder="Email" />
            </div>
            <div>
                <input
                    ref={favoriteColorInput}
                    type="text"
                    placeholder="Favorite Color" />
            </div>
            <Button onClick={e => {
                alert(`
                    Your name is ${nameInput.current.value},
                    Your email is ${emailInput.current.value},
                    Your Favorite Color is ${favoriteColorInput.current.value}!
                `);
                e.preventDefault();
            }}>Submit</Button>
        </form>
    );
}