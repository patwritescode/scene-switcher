import { createContext } from "react";

interface Context {
    currentPath: string;
    push: (currentPath: string) => void;
}
export default createContext<Context>(null);