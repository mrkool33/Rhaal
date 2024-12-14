import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Faetures/UserSlicer";
import LocationsReducer from "../Faetures/locationSlicer";
import ItemReducer from "../Faetures/itemsSlicer";
import BookingReducer from "../Faetures/bookingSlicer";
export const store = configureStore({
  reducer: {
    usersInfo: UserReducer,
    locations: LocationsReducer,
    items: ItemReducer,
    Bookings: BookingReducer,
  },
});
