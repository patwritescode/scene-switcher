# scene-switcher

`scene-switcher` is a declarative view router for React that allows you to easily handle swapping between views based on routes that aren't tied to the browser. It can be used along side (or without) a router such as `react-router` to serve as a manager for non-url driven view changes such as modals, wizards, etc.

This package was built with TypeScript so types are included.

# Getting Started

`npm i scene-switcher`

`scene-switcher` has a familiar syntax and functionality to `react-router` v4. Keep in mind these paths are not browser url paths and `scene-switcher` does not hook into the browser history nor does it replace a full browser router solution.

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

You can put your `<Scene/>` components anywhere and render them conditionally in their place based on the current path being supplied.

`scene-switcher` currently supports the following components:

- `Link` allows you to pass a path and navigate to it on click.
- `Scene` declares a route and will render the provided component if the currentPath matches.
- `Provider` is the top level state container using the new react v16.3 context api
- `Context` is the actual react context object that allows you to hook into the state stored for the router
- `Redirect` will redirect on mount to the provided path.
- `HistoryManager` allows you to create your own history storage and handlers to hook into the `scene-switcher` events. The default is a `MemoryHistoryManager` which is not tied to any browser state.