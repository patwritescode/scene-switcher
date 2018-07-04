export type HistoryState = {
    currentPath: string;
    canGoBack: boolean;
    canGoForward: boolean;
};

abstract class HistoryManager {
    protected readonly _initialPath: string;
    constructor(initialPath?: string) {
        this._initialPath = initialPath !== undefined && initialPath !== null
            ? initialPath
            : "/";
    }
    public abstract onPush(path: string): void;
    public abstract onBack(): void;
    public abstract onForward(): void;
    public abstract canGoBack(): boolean;
    public abstract canGoForward(): boolean;
    public abstract currentPath(): string;
    public getState(): HistoryState {
        return {
            currentPath: this.currentPath(),
            canGoBack: this.canGoBack(),
            canGoForward: this.canGoForward(),
        }
    }
}

export default HistoryManager;