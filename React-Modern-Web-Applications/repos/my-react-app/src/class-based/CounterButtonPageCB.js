import React from "react";
import { CounterButtonCB } from "./CounterButtonCB";
import { CongatulationsMessageCB } from "./CongratulationsMessageCB";
import { DisplayIf } from '../DisplayIf';

export class CounterButtonPageCB extends React.Component {
    state = {
        hideMessage: false,
        numberOfClicks: 0,
    };

    increment = () => {
        this.setState({ numberOfClicks: this.setState.numberOfClicks + 1 });
    }

    render() {
        const { hideMessage, numberOfClicks } = this.state;
        return (
            <>
                <h1>Counter Button Page</h1>
                <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
                    <CongatulationsMessageCB
                        threshold={10}
                        onHide={() => this.setState({ hideMessage: true })} />
                </DisplayIf>
                <CounterButtonCB onIncrement={this.state.increment} numberOfClicks={numberOfClicks} />
            </>
        );
    }
}