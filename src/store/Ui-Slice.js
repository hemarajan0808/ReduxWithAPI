import { createSlice } from "@reduxjs/toolkit";


const UiSliceState = { cartIsVisible:false}
const uiSlice = createSlice({
    name:'UISLice',
    initialState: UiSliceState,
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})
export const uiActions = uiSlice.actions;
export default uiSlice;