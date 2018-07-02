import HistoryManager from "./HistoryManager";

class MemoryHistoryManager extends HistoryManager {
    private _history: string[] = [];
    onPush(path: string): void {
        this._history.push(path);
    }
    getLastPath():string {
        return this._history[this._history.length - 2];
    }
}

export default MemoryHistoryManager;