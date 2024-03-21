import userSlice from "./slices/UserSlice";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        users: userSlice,
    }
})

export default store;