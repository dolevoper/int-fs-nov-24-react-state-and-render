import { useState } from "react";


export function CounterList() {
    const [counters, setCounters] = useState<number[]>([]);
  
    function newCounter() {
      setCounters([...counters, 0]);
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