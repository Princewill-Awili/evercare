import React from "react";
import Main from "./pages/Main/Main";
import Portal from "./pages/Portal/Portal";
import Register from "./pages/Register/Register";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/portal/*" element={<Portal/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
