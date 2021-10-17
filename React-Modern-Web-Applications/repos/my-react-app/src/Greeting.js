import React from "react";

// Part of default export just using it like this:
//function Greeting() {

// Definning a component Without arrow function notation
//export function Greeting() {

// Defining a component using Arrow functions
export const Greeting = () => {
    let isMorning = (new Date()).getHours() < 12;

    let greetingHeader = isMorning
        ? <h3>Good Morning!</h3>
        : <h3>Good Evening!</h3>;

    return (
        <>
            {greetingHeader}
            <p>You have 5 new messages</p>
        </>
    )
    // This is refactored above
    // return isMorning
    //     ? (
    //         <>
    //             <h3>Good Morning!</h3>
    //             <p>You have 5 messages</p>
    //         </>
    //     )
    //     : (<>
    //         <h3>Good Evening!</h3>
    //         <p>You have 5 messages</p>
    //     </>
    //     );
}

// Default export - doesn't enforce component naming. Which can lead to issues.
// export default Greeting;

// Anything in the <> </> is a React Fragment. If more then one 
// element needed - we need to wrap it in a Fragment.