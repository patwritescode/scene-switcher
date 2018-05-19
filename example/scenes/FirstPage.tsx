import React from "react";
import { Link } from "../..";

const FirstPage: React.SFC = () => (
    <div>
        first page
        <Link to="/two">go to two</Link>
    </div>
);

export default FirstPage;