import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address : {}
}

export const addressSlice = createSlice({
    name : 'address',
    initialState,
    reducers  : {
        setAddress :(state, action) => {
            return { address : action.payload }
        }, 
        clearAddress :(state) => {
            return { address : {}}
        }
    }
})

// export const state => state.stateName.object
export const getAddress = state => state.address.address

// exporting reducers
export const { setAddress, clearAddress } = addressSlice.actions

export default addressSlice.reducer