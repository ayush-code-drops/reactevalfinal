import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";

export function loginSuccess() {
    return {
        type:LOGIN_SUCCESS
    }
}
export function loginFailure() {
    return {
        type:LOGIN_FAILURE
    }
}