import React, { useState } from "react";
import Axios from 'axios';
import { useEffect } from 'react';

export const Login = () => {
    const [useridReg, setUserIdReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [userTypeReg, setUserTypeReg] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [backendData, setBackendData] = useState([{}]);

    const [loginStatus, setLoginStatus] = useState('');

    const register = () => {
        Axios.post('http://localhost:3002/api/register', {
            username: useridReg,
            password: passwordReg,
            usertype: userTypeReg
        }).then((response) => {
            console.log(response);
        });
    };

    /*
    const login = () => {
        Axios.post('http://localhost:3002/api/login', {
            username: username,
            password: password,
        }).then((res) => {
            console.log("hi")
            console.log(res);
        });
    };
*/
    const login = () => {
        console.log("here")
        fetch(`http://localhost:3002/api/login/100200/fasieh`).then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                console.log(data)
            }
        )
    }
    

    return (
        <div> 
    <form id="login-form">
                <label>User ID</label>
                <input  onChange={(e) => setUsername(e.target.value)} type="text"  />
                <label >Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="text"  />
                <button onClick={login}>Login</button>
         </form>
        
       </div>

    )
}