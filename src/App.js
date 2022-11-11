import React from "react";
import Main from "./pages/Main/Main";
import Portal from "./pages/Portal/Portal";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/portal/*" element={<Portal/>}/>
      </Routes>
    </div>
  );
}

export default App;
