import React from "react";
import Context from "./Context";

export interface Props {
    className?: string;
}

const BackButton: React.SFC<Props> = ({ className, children }) => (
    <Context.Consumer>
        {({goBack, canGoBack}) => (
            <button
                className={className}
                onClick={goBack}
                disabled={!canGoBack}>
                { children }
            </button>
        )}
    </Context.Consumer>
);

export default BackButton;
