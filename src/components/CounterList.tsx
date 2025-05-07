import { useEffect, useState } from "react";
import { UnSyncedCounter } from "./UnSyncedCounter";
import styles from "./CounterList.module.scss"

const STORAGE_KEY = "myCounters";

export function CounterList() {
  const [counters, setCounters] = useState<{ id: number }[]>([]);

  useEffect(() => {
    const savedCounters = localStorage.getItem(STORAGE_KEY);
    if (savedCounters) {
      try {
        setCounters(JSON.parse(savedCounters));
      } catch (error) {
        console.error("Error parsing counters from localStorage:", error);
      }
    }
  }, []);

  function newCounter() {
    setCounters([...counters, { id: Date.now() }]);
  }

  function deleteCounter(id: number) {
    setCounters(counters.filter((counter) => counter.id !== id))
  }

  function deleteAllCounters() {
    setCounters([]);
    localStorage.removeItem(STORAGE_KEY);
  }

  useEffect(() => {
    if (counters.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(counters));
      } catch (error) {
        console.error("Error saving counters to localStorage:", error)
      }
    }
  }, [counters]);

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
