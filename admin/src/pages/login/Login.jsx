import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { login } from '../../redux/apiCalls'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const user = useSelector((state) => state.user.currentUser);
    console.log(user)
    
    const dispatch = useDispatch()

    const handleClick = (e) =>{
        e.preventDefault()
        login(dispatch, {username, password})
        history.push("/")
    }
  return (
    <div style={{
        display:"flex",
        height:"100vh",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
        }}>
        <input 
        style={{padding:10, marginBottom:20}} 
        type='text' 
        placeholder='username' 
        onChange={e=>setUsername(e.target.value)}/>

        <input 
        style={{padding:10, marginBottom:20}} 
        type='password' 
        placeholder='password' 
        onChange={e=>setPassword(e.target.value)}/>

        <button onClick={handleClick} style={{padding:10, width:100}}>Login</button>
    </div>
  )
}

export default Login