import React from "react";
import Context from "./Context";

export interface Props {
    to: string;
    className?: string;
}
const LinkButton: React.SFC<Props> = ({ to, className, children }) => (
    <Context.Consumer>
        {({push}) => (
            <button
                className={className}
                onClick={() => push(to)}
            >
            { children }
            </button>
        )}
    </Context.Consumer>
);

export default LinkButton;
