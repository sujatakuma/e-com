import { createSlice } from "@reduxjs/toolkit";

import Productcard from "../product/Productcard";

const initialState = {
    Card: [],
    totalQuandity: 0,
    totalPrice: 0,
    
}

const CardSlice = createSlice({
    name: "Card",
    initialState: [],
    
    reducers: {
        add(state, action) {
            // let find = state.Card.findIndex((item) => item.id === action.payload.id);
            // if (find >= 0) {
            //     state.Card[find].quandity += 1;
            // } else {
                state.push(action.payload);
            // }
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        
        
    }
});

export const { add, remove} = CardSlice.actions;
export default CardSlice.reducer;
