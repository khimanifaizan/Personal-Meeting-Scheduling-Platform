import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {database} from './firebaseconfi';
import {createUserWithEmailAndPassword} from 'firebase/auth'
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.email.value
    const email = e.target.email.value
    const password = e.target.password.value
    createUserWithEmailAndPassword(database,email,password).then(
      data=>{
        console.log(data,"authData")
      }
    )
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Handle registration
      console.log("Registered");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='regi'>
      <div>
      <h1>Registration</h1>

        <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} name='name'/>
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password'/>
        {errors.password && <p>{errors.password}</p>}
      </div>
      
      <button type="submit">Login</button>
      <ul className="App-header">
            <li>
                <Link to="/" className='tel'>Click here to Login?</Link>
            </li>
            </ul>
    </form>
  );
}

export default Register;
