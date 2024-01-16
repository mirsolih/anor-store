import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState : {
        users:[],
        currentUser: null,
        isFetching:false,
        error: false,
    },
    reducers:{
        loginStart:(state) => {
            state.isFetching=true
        },
        loginSuccess:(state, action) => {
            state.isFetching=false;
            state.currentUser=action.payload
        },
        loginFailure:(state) => {
            state.isFetching=false;
            state.error=true
        },
        logoutState:(state) => {
            state.currentUser = false;
        },
        // Add user
        addUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
         },
        addUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.push(action.payload);
        },
        addUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },


    }
})

export const {loginStart, loginSuccess, loginFailure, logoutState, addUserFailure, addUserStart, addUserSuccess} = userSlice.actions;
export default userSlice.reducer;