import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function Admin() {
    const { isAuth } = useSelector((state) => state.auth)
    
    if (!isAuth) {
       
        return <Redirect to="/login"/>
        
    }
    return <div>
      admin
  </div>;
}
