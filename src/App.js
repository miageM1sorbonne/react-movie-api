import React, { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import TMDbLayout from "./components/TMDbLayout/TMDbLayout";
import WatchLater from "./components/WatchLater/WatchLater";

export const Container = React.createContext(); 

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Container.Provider value={inputValue}>
          <NavBar setInputValue={setInputValue} />
          <Routes>
            <Route path="" element={<TMDbLayout />} />
            <Route path="WatchLater" element={<WatchLater />} />
          </Routes>
        </Container.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
