import axios from "axios";
import { ADD_REQ, REQ_FAILURE, REQ_LOADING, REQ_SUCCESS } from "./actionTypes";

export function reqLoading() {
    return {
        type: REQ_LOADING,
        
    }
}
export function reqSuccess(payload) {
    return {
        type: REQ_SUCCESS, 
        payload
    }
}
export function reqFailure(err) {
    return {
        type: REQ_FAILURE,
        payload:err
    }
}

export function addRequest(payload) {
    return {
        type: ADD_REQ,
        payload
       
    }
}

export const getRequests = () =>(dispatch) => {
    dispatch(reqLoading())
    axios.get("https://json-server-deploy-mock.herokuapp.com/requests")
        .then((res) => {
            console.log('d',res.data)
        dispatch(reqSuccess(res.data))
        })
        .catch((err) => {
        dispatch(reqFailure(err))
    })
}
