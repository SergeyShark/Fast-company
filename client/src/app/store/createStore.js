import { combineReducers, configureStore } from "@reduxjs/toolkit";
import qualitiesReducer from "./qualities";
import professionsReducer from "./profession";
import usersReducer from "./users";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionsReducer,
    users: usersReducer,
    comments: commentsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
        // middleware: (getDefaultMiddleware) =>
        //     getDefaultMiddleware().concat(logger),
        // devTools: process.env.NODE_ENV !== "production"
    });
}
export default createStore;
