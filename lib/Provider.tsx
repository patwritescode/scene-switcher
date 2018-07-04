import React from "react";
import Context from "./Context";
import MemoryHistoryManager from "./MemoryHistoryManager";
import HistoryManager, { HistoryState } from "./HistoryManager";

export interface Props {
    history: HistoryManager;
}
class Provider extends React.Component<Props, HistoryState> {
    state = this.props.history.getState();
    push = (currentPath: string) => {
        const { history } = this.props;
        history.onPush(currentPath);
        this.setState(history.getState());
    }
    goBack = () => {
        const { history } = this.props;
        history.onBack();
        this.setState(history.getState());
    }
    goForward = () => {
        const { history } = this.props;
        history.onForward();
        this.setState(history.getState());
    }
    render() {
        const { currentPath, canGoBack, canGoForward } = this.state;
        const { children } = this.props;
        return (
            <Context.Provider value={{
                currentPath,
                canGoBack,
                canGoForward,
                push: this.push,
                goBack: this.goBack,
                goForward: this.goForward,
            }}>
                { children }
            </Context.Provider>
        );
    }
}

export default Provider;