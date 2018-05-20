import React from "react";
import Context from "./Context";
import MemoryHistoryManager from "./MemoryHistoryManager";
import HistoryManager from "./HistoryManager";

export interface State {
    currentPath: string;
}
export interface Props {
    history?: MemoryHistoryManager;
}
class Provider extends React.Component<Props, State> {
    private readonly history: HistoryManager;
    constructor(props) {
        super(props);
        this.history = props.history
            ? props.history
            : new MemoryHistoryManager();
    }
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