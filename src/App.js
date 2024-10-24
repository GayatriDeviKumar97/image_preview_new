import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import File from "../src/components/File/File.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<File />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
