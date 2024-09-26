import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./slice/PostSlice";

const store = configureStore({
    reducer : {
        user : PostSlice,
    }
});
 export default store