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

  return (
    <>
      <button onClick={newCounter}>New counter</button>
      <button onClick={deleteAllCounters}>Delete All Counters</button>
      <ul className={styles.list}>
        {counters.map((counter) => <li key={counter.id}>
          <UnSyncedCounter />
          <button onClick={() => deleteCounter(counter.id)}>Delete Counter</button>
        </li>)}

      </ul>
    </>
  );
}
