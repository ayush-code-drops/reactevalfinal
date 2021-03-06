import React from 'react';
import { ADD_REQ, REQ_FAILURE, REQ_LOADING, REQ_SUCCESS } from './actionTypes';
const initState = {
    req: [],
    isLoading:true,
    isError:false
}
export default function appReducer(state=initState,{type,payload}) {
    switch (type) {
        case REQ_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case REQ_SUCCESS:
            return {
                ...state,
                isLoading: false,
                req:payload
            }
        case REQ_FAILURE:
            return {
                ...state,
                isError:true,
                isLoading: false
            }
        
        case ADD_REQ:
            return {
                ...state,
                req:[...state.req,payload]
            }
        
        default:
            return state
}
}
