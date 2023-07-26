import React, { useState } from 'react';
import styles from '../styles/login.module.css';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = 'http://localhost:8000/api';

const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember,setIsRemember] = useState(false);
   
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
  
      if (!email || !password) {
       toast.error('Please fill in all fields.');
        return;
      }
  
      try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password,isRemember });
  
        if (response.status === 200) {
          toast.success('Login successful!');
        }
      } catch (error) {
        toast.error('Invalid credentials.');
      }
    };
    return(
       <div className={styles.container}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              
            />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.checkbox}>
              <input 
                type="checkbox" 
                id="checkbox"
                onChange={(e)=> setIsRemember((prev)=>!prev)}/>
              <span>Remember Me</span>
            </div>
             <div className={styles.forgetPasswordWrapper}>
                <a href="/" className={styles.forgetPasswordLink}>Forget Password ?</a>
             </div>
          </div>
          <button type="submit" className={styles.btn}>Login</button>
        </form>
        <div className={styles.clickToJoin}>
            <span>Not Registered?</span>
            <a href="/">Click here to join</a>
        </div>
        <ToastContainer position="top-center" autoClose={5000} closeOnClick={true}/>
        </div>
    )
}

export default Login;