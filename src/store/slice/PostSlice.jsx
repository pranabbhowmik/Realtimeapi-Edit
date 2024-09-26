import {createSlice} from "@reduxjs/toolkit"

const postSlice = createSlice({
    name:"post",
    initialState:[],
    reducers : {
        removePost(state,action){
            state.splice(action.payload,1);
        }
    }
})

export const {removePost} = postSlice.actions
export default postSlice.reducer