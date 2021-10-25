import Temperature from "./Components/Temperature/Temperature";
import WeekDays from "./Components/WeekDays/WeekDays";
import { TempData } from "./Context/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TempData>
        <Temperature />
        <WeekDays />
      </TempData>
    </div>
  );
}

export default App;
