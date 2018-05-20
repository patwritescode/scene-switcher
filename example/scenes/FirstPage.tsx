import React from "react";
import { Link, SceneComponentProps } from "../..";
import Redirect from "../../lib/Redirect";

const FirstPage: React.SFC<SceneComponentProps<{}>> = (props) => {
    return (
        <div>
            first page is at {props.currentPath}
            <div>
                <Link to="/two/hello">go to two</Link>
                <Redirect to="/two/hello"/>
            </div>
        </div>
    );
}

export default FirstPage;