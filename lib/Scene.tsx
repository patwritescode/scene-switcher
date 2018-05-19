import React from "react";
import Context from "./Context";
import Path from "path-parser";

interface Props {
    name: string;
    path: string;
    component: React.ReactNode;
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
                        return component;
                    }
                    return null;
                }}
            </Context.Consumer>
        );
    }
}

export default Scene;