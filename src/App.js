import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
