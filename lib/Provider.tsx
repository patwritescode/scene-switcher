import React from "react";
import Context from "./Context";

export interface State {
    currentPath: string;
}
class Provider extends React.Component<{}, State> {
    state = {
        currentPath: "/"
    }
    push = (currentPath: string) => this.setState({ currentPath });
    render() {
        const { currentPath } = this.state;
        const { children } = this.props;
        return (
            <Context.Provider value={{currentPath, push: this.push}}>
                { children }
            </Context.Provider>
        );
    }
}

export default Provider;