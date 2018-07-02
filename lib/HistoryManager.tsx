abstract class HistoryManager {
    public abstract onPush(path: string): void;
    public abstract getLastPath(): string;
}

export default HistoryManager;