import React, { createContext } from "react";

export interface Context {
    currentPath: string;
    push: (currentPath: string) => void;
}
export default createContext<Context>(null);