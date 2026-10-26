import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
    name: 'info',
    initialState: {
        value: localStorage.getItem("userinfo")?JSON.parse(localStorage.getItem("userinfo")) :null
    },
    reducers: {
        activeuserinfo: (state,action) => {
            state.value=action.payload
            localStorage.setItem("userinfo",state.value)
           
           
            
        },
        logout: (state,action) => {
            state.value=""
            localStorage.setItem("userinfo","")
            console.log(state.value);
            
            
        },
        

    }
})

export const { activeuserinfo ,logout} = userInfoSlice.actions
export default userInfoSlice.reducer