import styles from "./Counter.module.scss";

<<<<<<< HEAD
export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <article className={styles.container}>
            <button onClick={() => {
                setCount(count / 2);
            }}>➗2</button>
            <button onClick={() => {
                setCount(count - 1);
            }}>➖1</button>
            <span>{count}</span>
            <button onClick={() => {
                setCount(count + 1);
            }}>➕1</button>
            <button onClick={() => {
                setCount(count * 2)
            }}>✖️2</button>
            <button onClick={() => {
                setCount(0);
            }}>Reset</button>
=======
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
>>>>>>> 0b5a51012e030be945ac48beef61c8e8125d1e1d
        </article>
    );
}
