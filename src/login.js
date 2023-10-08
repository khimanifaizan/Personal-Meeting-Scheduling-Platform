import { BrowserRouter as Router, Route, Link,button, Routes, useNavigate } from 'react-router-dom';
import {database} from './firebaseconfi';
import React, { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import './logandregi.css';

function Login() {

  const history = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const validate = () => {
    let errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    signInWithEmailAndPassword(database,email,password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      history("/calender");
      console.log(user);
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
  }
    )
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Handle login
      console.log("Logged in");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Login</h1>
        <label>Email:</label>
        <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button>Login</button>
      
      <ul className="App-header">
            <li>
                <Link to="/Registration"className='tel' >Click here to Registration?</Link> 

            </li>
            </ul>
    </form>
    
  );

}

export default Login;

