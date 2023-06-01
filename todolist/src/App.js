import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './page/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
