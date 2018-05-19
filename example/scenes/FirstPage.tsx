import React from "react";
import { Link, SceneComponentProps } from "../..";

const FirstPage: React.SFC<SceneComponentProps<{}>> = (props) => {
    return (
        <div>
            first page is at {props.currentPath}
            <div>
                <Link to="/two/hello">go to two</Link>
            </div>
        </div>
    );
}

export default FirstPage;