import React from "react";
import Context, { ContextState } from "./Context";

const withScene = <Props extends ContextState>(Passed: React.ComponentType<Props>) =>
(props: Props) => (
    <Context.Consumer>
        {(contextState) => (
            <Passed {...props} {...contextState}/>
        )}
    </Context.Consumer>
);

export default withScene;
