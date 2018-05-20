import React from "react";
import { SceneComponentProps } from "../..";

export interface Props {
    text: string;
}
const SecondPage: React.SFC<SceneComponentProps<Props>> = ({ params }) => (
    <div>
        Second page: {params.text}
    </div>
);

export default SecondPage;