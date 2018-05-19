# scene-switcher

`scene-switcher` is a declarative view manager for React that allows you to easily handle swapping between views based on routes that aren't tied to the browser. It can be used along side (or without) a router such as `react-router` to serve as a manager for non-url driven view changes such as modals, wizards, etc.

# Getting Started

```typescript
import { Provider } from "scene-switcher";

const App = () => (
    <Provider>
        <Scene name="first-view" component={FirstView} exact path="/">
        <Scene name="second-view" component={SecondView} path="/second-view/:text">
    </Provider>
);

...

import { SceneComponentProps } from "scene-switcher";

const FirstView: React.SFC<SceneComponentProps<{}>> = (props) => (
    <div>
        first page
        <Link to="/second-view/hello-world">Go to second view</Link>
    </div>
);

...

interface Props {
    text: string;
}
const SecondView: React.SFC<SceneComponentProps<Props>> = ({ params }) => (
    <div>
        text is {params.text}
    </div>
);
```

This repo is a work in progress currently.