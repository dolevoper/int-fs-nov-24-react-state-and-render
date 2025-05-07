import { useState } from "react";
import { Counter } from "./Counter";

// 1. add "SPA navigation" - menu with button to show the synced counters and another button to show the counter list
// 2. implement "static" counter list - show 4 counters with individual states
// 3. implement "dynamic" counter list
//      - show one button: "New counter" - clicking on it will add a counter to the screen
//      - next to each counter show a delete button to remove the counter from the screen
//      - counters should not be synced (each should have an individual state)
// 4. add up/down buttons in each counter in the list to re-order the counters
// Bonus - maintain the state of the counters when "navigating" back and forth  between the components

function App() {
  const [currentTab, setCurrentTab] = useState<"synced" | "list">("synced");

  return (
    <>
      <Nav onSyncedClick={() => setCurrentTab("synced")} onListClick={() => setCurrentTab("list")} />
      {currentTab === "synced" ? <SyncedCounters /> : <CounterList />}
    </>
  );
}

type NavProps = {
  onSyncedClick: () => void;
  onListClick: () => void;
};
function Nav({ onSyncedClick, onListClick }: NavProps) {
  return (
    <nav>
      <button onClick={onSyncedClick}>Synced</button>
      <button onClick={onListClick}>List</button>
    </nav>
  );
}

function SyncedCounters() {
  const [count, setCount] = useState(0);

  function half() {
    setCount(count / 2);
  }

  function decrease() {
    setCount(count - 1);
  }

  function increase() {
    setCount(count + 1);
  }

  function double() {
    setCount(count * 2);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
      <Counter count={count} onHalfClick={half} onDecreaseClick={decrease} onIncreaseClick={increase} onDoubleClick={double} onResetClick={reset} />
    </>
  );
}

const counterListStorageKey = "counterList";

function CounterList() {
  const [counters, setCounters] = useState<number[]>(() => {
    const valueFromStorage = localStorage.getItem(counterListStorageKey);

    if (!valueFromStorage) {
      return [];
    }

    try {
      const savedCounters = JSON.parse(valueFromStorage);

      if (!Array.isArray(savedCounters) || savedCounters.some((value) => typeof value !== "number")) {
        throw new Error();
      }

      return savedCounters;
    } catch {
      localStorage.removeItem(counterListStorageKey);

      return [];
    }
  });

  function updateCounters(newValue: number[]) {
    setCounters(newValue);
    localStorage.setItem(counterListStorageKey, JSON.stringify(newValue));
  }

  function newCounter() {
    updateCounters([...counters, 0]);
  }
  
  return (
    <>
      <button onClick={newCounter}>New counter</button>
      <ul>
        {counters.map((count, index) => <li key={index}>{count}</li>)}
      </ul>
    </>
  );
}

export default App;
