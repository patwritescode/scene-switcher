import HistoryManager from "./HistoryManager";

class MemoryHistoryManager extends HistoryManager {
    protected _history: string[] = [];
    protected _currentIndex: number = 0;
    constructor(initialPath?: string) {
        super(initialPath);
        this._history = [this._initialPath];
    }
    onPush(path: string): void {
        this._currentIndex++;
        const history = this._history.slice(0, this._currentIndex);
        history.push(path);
        this._history = history;
    }
    onBack(): void {
        this.canGoBack()
            ? this._currentIndex--
            : this._currentIndex;
    }
    onForward(): void {
        this.canGoForward()
            ? this._currentIndex++
            : this._currentIndex;
    }
    canGoForward(): boolean {
        return this._currentIndex !== this._history.length - 1;
    }
    canGoBack(): boolean {
        return this._currentIndex > 0;
    }
    currentPath(): string {
        return this._history[this._currentIndex];
    }
}

export default MemoryHistoryManager;