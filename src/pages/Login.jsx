import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const onSubmit=()=>{
        
    }
    return (
        <div>Login</div>
    )
}

export default Login