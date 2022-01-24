import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


import { useDispatch } from 'react-redux';
import { getRequests } from '../redux/app/action';
import DashboardTable from "../components/DashboardTable"
export default function Admin() {
    const { isAuth } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const{req,isLoading,isError}=useSelector((state)=>state.app)
  console.log("Req", req)
  useEffect(() => {
    dispatch(getRequests())
    }, [])
    if (!isAuth) {
       
        return <Redirect to="/login"/>
        
    }
   
    return <div>
     <DashboardTable data={req}/>
  </div>;
}
