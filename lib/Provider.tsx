import React from "react";
import Context from "./Context";
import MemoryHistoryManager from "./MemoryHistoryManager";
import HistoryManager from "./HistoryManager";

export interface State {
    currentPath: string;
}
export interface Props {
    history?: MemoryHistoryManager;
    initialPath?: string;
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
        currentPath: this.props.initialPath || "/"
    }
    push = (currentPath: string) => {
        this.history.onPush(currentPath);
        this.setState({ currentPath });
    }
    goBack = () => {
        this.setState({ currentPath: this.history.getLastPath() });
    }
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