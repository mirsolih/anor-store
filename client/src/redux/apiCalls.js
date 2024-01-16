import { useState } from "react";
import { publicRequest, userRequest } from "../requestMethods";
import { addUserFailure, addUserStart, addUserSuccess, loginFailure, loginStart, loginSuccess, logoutState } from "./userRedux"



export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure());
    }
}

export const Logout = async (dispatch, user) => {
    //dispatch(logoutState(user))
    //console.log(dispatch)
    console.log("Logout feature evoked")
}

export const AddUser = async (user, dispatch) =>{
    console.log("This is user, ",user)
    dispatch(addUserStart());
    try{
        const res = userRequest.post(`/auth/register`, user);
        dispatch(addUserSuccess(res.data));
    } catch(err){
        dispatch(addUserFailure());
    }
}