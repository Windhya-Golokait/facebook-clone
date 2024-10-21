import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/HeaderArea' element={<HeaderArea />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
