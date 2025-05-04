import styles from "./Counter.module.scss";

type CounterProps = {
    count: number;
    onHalfClick: () => void;
    onDecreaseClick: () => void;
    onIncreaseClick: () => void;
    onDoubleClick: () => void;
    onResetClick: () => void;
};
export function Counter({ count, onHalfClick, onDecreaseClick, onIncreaseClick, onDoubleClick, onResetClick }: CounterProps) {
    return (
        <article className={styles.container}>
            <button onClick={onHalfClick}>➗2</button>
            <button onClick={onDecreaseClick}>➖1</button>
            <span>{count}</span>
            <button onClick={onIncreaseClick}>➕1</button>
            <button onClick={onDoubleClick}>✖️2</button>
            <button onClick={onResetClick}>Reset</button>
        </article>
    );
}
