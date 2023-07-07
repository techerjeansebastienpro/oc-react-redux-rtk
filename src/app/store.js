import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import thunk from 'redux-thunk'

let state = {
    owner: {},
    list: [
    ]
};

export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            owner: ownerSlice.reducer,
            list: cartSlice.reducer,
        }),
        // Liste des middlewares
        middleware: [
                () => (next) => (action) => {
                    console.log('Action', action)
                    next(action);
                },
                thunk,
        ]
    }
)
