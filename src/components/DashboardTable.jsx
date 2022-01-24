import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./navbar.module.css"
import { useSelector } from 'react-redux';
function createData(Name, Date, Purpose, Amount, Status) {
    return { Name, Date, Purpose, Amount, Status };
  }
  

  
export default function DashboardTable({ data }) {
    const { isLoading, isError } = useSelector((state) => state.app)
    
    if (isLoading) {
        return <div>...Loading</div>
    }
    return (
        <table className={styles.table}>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Purpose</th>
          <th>Amount</th>
          <th>Status</th>
            </tr>
            {
                data.map((item) => {
                    return (
                      <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.purpose}</td>
                            <td>{item.amount}</td>
                            <td>{item.status}</td>
         
        </tr>  
                    )
                })
            }
        
      </table>
   )
  }