import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Faetures/UserSlicer";
import LocationsReducer from "../Faetures/locationSlicer";

export const store=configureStore({
    reducer:{
        usersInfo:UserReducer,
        locations:LocationsReducer
    }
});
