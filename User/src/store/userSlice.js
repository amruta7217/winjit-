import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        add: (state, action) => {
            state.push(action.payload)
        },

        remove: (state, action) => {
           return state.filter(item => item.id !== action.payload)
        },
        
        update: (state, action) => {
            const { 
                id, 
                username,
                password,
                confirmPassword,
                fname,
                lname,
                email,
                address,
                city,
                stateu,
                pincode
            } = action.payload

            const user = state.find(user => user.id === id)
            if(user){
                user.username = username,
                user.password = password,
                user.confirmPassword = confirmPassword,
                user.fname = fname,
                user.lname = lname,
                user.email = email,
                user.address = address,
                user.city = city,
                user.state = stateu,
                user.pincode = pincode
            }
        }
    }
})

export const { add, remove, update } = userSlice.actions;

export default userSlice.reducer