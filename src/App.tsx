import { CounterList } from "./components/counterList";
import { Routes, Route, Link } from "react-router-dom";



// 1. add "SPA navigation" - menu with button to show the synced counters and another button to show the counter list
// 2. implement "static" counter list - show 4 counters with individual states
// 3. implement "dynamic" counter list
//      - show one button: "New counter" - clicking on it will add a counter to the screen
//      - next to each counter show a delete button to remove the counter from the screen
//      - counters should not be synced (each should have an individual state)
// 4. add up/down buttons in each counter in the list to re-order the counters
// Bonus - maintain the state of the counters when "navigating" back and forth  between the components

function Home() {
  return(
    <h1>Home Page</h1>
  );
}

function App() {

  return(
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/counters">Counters</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counters" element={<CounterList />} />
      </Routes>
    </>
  );
}


export default App;
