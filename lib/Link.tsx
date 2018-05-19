import React from "react";
import Context from "./Context";

interface Props {
    to: string;
    className?: string;
}
const Link: React.SFC<Props> = ({ to, className, children }) => (
    <Context.Consumer>
        {({push}) => (
            <a
                className={className}
                onClick={() => push(to)}
            >
            { children }
            </a>
        )}
    </Context.Consumer>
);

export default Link;