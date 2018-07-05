import React from "react";
import { LinkButton, SceneComponentProps } from "../..";
import Redirect from "../../lib/Redirect";

const FirstPage: React.SFC<SceneComponentProps<{}>> = (props) => {
    return (
        <div>
            first page is at {props.currentPath}
            <div>
                <LinkButton to="/two/hello">go to two</LinkButton>
            </div>
        </div>
    );
}

export default FirstPage;