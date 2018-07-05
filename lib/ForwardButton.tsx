import React from "react";
import Context from "./Context";

export interface Props {
    className?: string;
}
const ForwardButton: React.SFC<Props> = ({ className, children }) => (
    <Context.Consumer>
        {({goForward, canGoForward}) => (
            <button
                className={className}
                onClick={goForward}
                disabled={!canGoForward}
            >
            { children }
            </button>
        )}
    </Context.Consumer>
);

export default ForwardButton;
