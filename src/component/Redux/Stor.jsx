import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Cardslicce";
const store= configureStore({
    reducer:{
        card:cardReducer
    }
})
export default store;