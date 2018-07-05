import React, { createContext } from "react";

export interface ContextState {
    currentPath: string;
    push: (currentPath: string) => void;
    goBack: () => void;
    goForward: () => void;
    canGoBack: boolean;
    canGoForward: boolean;
}
export default createContext<ContextState>(null);