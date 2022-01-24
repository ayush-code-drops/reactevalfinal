import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginSuccess } from '../redux/auth/action';
import { Redirect } from 'react-router-dom';

export default function Login() {
    const[email,setEmail]=useState("")
    const [pass, setPass] = useState("")
    const { isAuth } = useSelector((state) => state.auth)
    const dispatch=useDispatch()
    const handleLogin = () => {
        if (email == 'admin@email.com' && pass == 'admin') {
            dispatch(loginSuccess()) 
            alert("Login Successful")
        }
        else {
            dispatch(loginFailure())
            alert("Wrong Credentials")
        }
    }

    if (isAuth) {
        return <Redirect to="/dashboard/admin"/>
    }

    
    return (
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h4>Login as admin</h4>
           
            <TextField id="outlined-basic" label="email" variant="standard" onChange={(e)=>setEmail(e.target.value)} value={email} />
            <TextField id="outlined-basic" label="password" variant="standard" onChange={(e)=>setPass(e.target.value)} value={pass} />
            <Button sx={{m:2}} onClick={handleLogin} variant="contained">Login</Button>
            

            <h4>(use email:admin@email.com,
                <br></br>password:admin for demo)</h4>
     </Box>
 )
}
