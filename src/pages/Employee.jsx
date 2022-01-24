import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import RequestForm from '../components/RequestForm';
import { getRequests } from '../redux/app/action';
import DashboardTable from "../components/DashboardTable"
export default function Employee() {
  const dispatch = useDispatch()
  
  
  const{req,isLoading,isError}=useSelector((state)=>state.app)
  console.log("Req", req)
  useEffect(() => {
    dispatch(getRequests())
    }, [])
  return (
    <div>
      <h3>Request Reimbursement Here</h3> 
      <RequestForm />
      
      <h3>Reimbursement Dashboard</h3>
      <DashboardTable data={req}/>
    </div>
    
  )
}
