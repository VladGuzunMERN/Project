import {createSlice,createSyncThunk} from '@reduxjs/toolkit'

const initialState = {
    goals: [],
    isError: false,
    isSuccess:false,
    isLoading:false,
    message: ''
}

//create goal


export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers:{
        reset:(state)=> initialState
    }
})
export const {reset} = goalSlice.actions
export default goalSlice.reducer