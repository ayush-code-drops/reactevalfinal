import axios from "axios";
import { REQ_FAILURE, REQ_LOADING, REQ_SUCCESS } from "./actionTypes";

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

