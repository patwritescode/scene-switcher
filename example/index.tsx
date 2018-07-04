import React from "react";
import { hot } from "react-hot-loader";
import { render } from "react-dom";
import { Provider, Scene, MemoryHistoryManager } from "..";
import FirstPage from "./scenes/FirstPage";
import SecondPage from "./scenes/SecondPage";
const history = new MemoryHistoryManager();
const App = () => (
    <Provider history={history}>
        <Scene exact path="/" component={FirstPage} name="first-page"/>
        <Scene path="/two/:text" component={SecondPage} name="second-page"/>
    </Provider>
);

const HotApp = hot(module)(App);

render(<HotApp/>, document.querySelector("#root"));