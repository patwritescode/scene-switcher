import React, { Component, StatelessComponent, Attributes } from "react";
import Context from "./Context";
import Path from "path-parser";

interface Props {
    name: string;
    path: string;
    component: StatelessComponent;
    exact?: boolean;
}

class Scene extends React.Component<Props> {
    route: Path;
    constructor(props) {
        super(props);
        this.route = new Path(this.props.path);
    }
    render() {
        const { path, component, exact } = this.props;
        return (
            <Context.Consumer>
                {({currentPath}) => {
                    const match = exact
                        ? this.route.test(currentPath)
                        : this.route.partialTest(currentPath);
                    if(match) {
                        const childProps = {
                            currentPath,
                            params: match
                        }
                        return React.createElement(component, childProps as Attributes);
                    }
                    return null;
                }}
            </Context.Consumer>
        );
    }
}

export type SceneComponentProps<T> = {
    currentPath: string;
    params: Partial<T>;
}

export default Scene;