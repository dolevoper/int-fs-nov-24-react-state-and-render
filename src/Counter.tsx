import { useState } from "react";
import styles from "./Counter.module.scss";

export function Counter() {
    console.log("Render Counter");
    const [count, setCount] = useState(0);

    return (
        <article className={styles.container}>
            <button onClick={() => {
                setCount(count / 2);
                console.log(count);
            }}>➗2</button>
            <button onClick={() => {
                setCount(count - 1);
                console.log(count);
            }}>➖1</button>
            <span>{count}</span>
            <button onClick={() => {
                setCount(count + 1);
                console.log(count);
            }}>➕1</button>
            <button onClick={() => {
                setCount(count *2);
                console.log(count);
            }}>✖️2</button>
            <button onClick={() => {
                setCount(0);
                console.log(count);
            }}>Reset</button>
        </article>
    );
}
