import React from 'react';
import Home from './Components/Home/Home';
import Data from './Components/Data/Data';
import Projects from './Components/Projects/Projects';
import Dashboard from './Components/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Dashboard/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
  );
}

export default App;




