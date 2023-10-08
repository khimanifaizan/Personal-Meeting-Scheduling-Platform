import { BrowserRouter as Router, Route, Link, Button,Routes } from 'react-router-dom';
import React from 'react';
// import './App.css';
import Login from './login';
import Register from './registration';
import Calendar from './calender';
import database from './firebaseconfi';
import Sloatbooking from './sloatbooking';

// import ForgotPassword from './forgotpassword';
function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
                <Route exact path='/' element={< Login />}></Route> 
                <Route exact path='/Registration' element={< Register />}></Route> 
                <Route exact path='/Calender' element={<Calendar/>}></Route>
                <Route exact path='/sloatbooking' element={<Sloatbooking />}></Route>

        </Routes>
        </div>
    </Router>
  );
}

export default App;
