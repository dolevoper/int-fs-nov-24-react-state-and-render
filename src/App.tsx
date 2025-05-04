import { useReducer } from 'react'
import { Counter } from './Counter';

function App() {
  const [, forceRender] = useReducer((count) => count + 1, 0);

  return (
    <>
      <div>
        <button onClick={forceRender}>Render</button>
      </div>
      <Counter />
    </>
  )
}

export default App
