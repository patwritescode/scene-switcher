abstract class HistoryManager {
    public abstract onPush(path: string): void;
}

export default HistoryManager;