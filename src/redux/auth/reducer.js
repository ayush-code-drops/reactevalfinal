import React from 'react';
import { LOGIN_SUCCESS } from './actionTypes';
const initState = {
    isAuth: false
}
export default function authReducer(state=initState,{type,payload}) {
    switch(type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth:true
            }
        default:
            return state
  }
}
