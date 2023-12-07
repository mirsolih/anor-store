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

export const logout = async (dispatch, token) => {
    console.log("Logout featuire evoked")
    console.log(dispatch, token)
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