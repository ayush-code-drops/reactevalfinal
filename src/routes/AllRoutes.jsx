import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Admin from '../pages/Admin';
import Employee from '../pages/Employee';
import Login from '../pages/Login';

export default function AllRoutes() {
  return(
      <div>
          <Route exact path="/dashboard/user">
              <Employee/>
          </Route>
          <Route exact path="/login">
<Login/>
          </Route>
          <Route exact path="/dashboard/admin">
<Admin/>
          </Route>

      </div>
    )
}
