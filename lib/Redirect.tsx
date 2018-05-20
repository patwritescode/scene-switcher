import React from "react";
import Context from "./Context";

interface Props {
    to: string;
}
const Redirect: React.SFC<Props> = ({ to }) => (
    <Context.Consumer>
        {({push}) => (
            <RedirectLoader
                onReady={() => {
                    push(to);
                }}
            />
        )}
    </Context.Consumer>
);

interface LoaderProps {
    onReady: () => void;
}
class RedirectLoader extends React.Component<LoaderProps> {
    componentDidMount() {
        this.props.onReady();
    }
    render() {
        return null;
    }
}

export default Redirect;