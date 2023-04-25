import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SignUp = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    
    const onSubmit=()=>{
        
    }
    return (
        <div>SignUp</div>
    )
}

export default SignUp