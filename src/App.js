import "./index.css";
import Generator from "./Generator";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Generator/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
