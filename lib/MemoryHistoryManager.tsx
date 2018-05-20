import HistoryManager from "./HistoryManager";

class MemoryHistoryManager extends HistoryManager {
    private _history: string[] = [];
    onPush(path: string): void {
        this._history.push(path);
    }
}

export default MemoryHistoryManager;