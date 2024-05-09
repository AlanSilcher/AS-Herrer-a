import React from 'react';
import Home from './Components/Home/Home';
import Data from './Components/Data/Data';
import Projects from './Components/Projects/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <h1>sss</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
  );
}

export default App;




