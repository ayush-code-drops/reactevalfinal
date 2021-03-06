import React, { useState } from 'react';
import styles from "./navbar.module.css"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addRequest } from '../redux/app/action';
export default function RequestForm() {
    const[name,setName]=useState("")
    const[date,setDate]=useState("")
    const[purpose,setPurpose]=useState("")
    const [amount, setAmount] = useState(0)
    const [id, setid] = useState(11)
    const dispatch=useDispatch()
    const handleSubmit = () => {
        setid(id + 1)
        const payload = {
            id,
            name,
            date,
            purpose,
            amount,
            status:"pending"
        }

    dispatch(addRequest(payload))
    return axios.post("https://json-server-deploy-mock.herokuapp.com/requests",payload)
    }
    return (
        <Box sx={{
            display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "1px solid black", width:"500px",margin:"auto"}}>
            
           
            <TextField id="outlined-basic" label="Name" variant="standard" onChange={(e)=>setName(e.target.value)} value={name} />
            <TextField id="outlined-basic" label="Date" variant="standard" onChange={(e)=>setDate(e.target.value)} value={date} placeholder="eg:12/12/2000" />
            <TextField id="outlined-basic" label="Purpose" variant="standard" onChange={(e)=>setPurpose(e.target.value)} value={purpose} />
            <TextField id="outlined-basic" label="Amount" variant="standard" onChange={(e)=>setAmount(e.target.value)} value={amount} />
           
            <Button sx={{m:2}} onClick={handleSubmit} variant="contained">Make a Request</Button>
        
     </Box>
    );
}
