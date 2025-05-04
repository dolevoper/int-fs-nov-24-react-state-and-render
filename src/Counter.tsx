import { useState } from "react";
import styles from "./Counter.module.scss";

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
        </article>
    );
}
