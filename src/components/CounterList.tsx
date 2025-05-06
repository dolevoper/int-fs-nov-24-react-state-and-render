import { useState } from "react";
import { UnSyncedCounter } from "./UnSyncedCounter";
import styles from "./CounterList.module.scss"


export function CounterList() {
  const [counters, setCounters] = useState<{ id: number }[]>([]);

  function newCounter() {
    setCounters([...counters, { id: Date.now() }]);
  }

  function deleteCounter(id: number) {
    setCounters(counters.filter((counter) => counter.id !== id))
  }

  function deleteAllCounters() {
    setCounters([]);
  }

  function moveCounter(fromIndex: number, toIndex: number) {
    const updatedCounters = [...counters];
    const [movedCounter] = updatedCounters.splice(fromIndex, 1);
    updatedCounters.splice(toIndex, 0, movedCounter);
    setCounters(updatedCounters); 
  }

  return (
    <>
      <button onClick={newCounter}>New counter</button>
      <button onClick={deleteAllCounters}>Delete All Counters</button>
      <ul className={styles.list}>
        {counters.map((counter, index) => <li key={counter.id}>
          <UnSyncedCounter />
          {index > 0 && (
            <button onClick={() => {moveCounter(index, index - 1)}}>⬆️</button>
          )}
          {index < counters.length - 1 && (
            <button onClick={() => { moveCounter(index, index + 1)}}>⬇️</button>
          )}
          <button onClick={() => deleteCounter(counter.id)}>Delete Counter</button>
        </li>)}

      </ul>
    </>
  );
}
