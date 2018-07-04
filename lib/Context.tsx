import React, { createContext } from "react";

export interface Context {
    currentPath: string;
    push: (currentPath: string) => void;
    goBack: () => void;
    goForward: () => void;
    canGoBack: boolean;
    canGoForward: boolean;
}
export default createContext<Context>(null);