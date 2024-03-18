
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch ,Routes } from 'react-router-dom';


import LoginSignup from './Components/LoginSignup/LoginSignup';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    // <div className="App">
    //   <LoginSignup />
    // </div>
  <>
  
      <Router>
        <Navbar />
         <Routes>
         <Route exact path="/Home" element={<Home />} />
          <Route exact path="/LoginSignup" element={<LoginSignup/>} />
          <Route exact path="/Dashboard" element={<Dashboard/>} />
          </Routes>
      </Router>
      
   </>
  );
}

export default App;
