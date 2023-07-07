import { combineReducers, configureStore, createAction, createReducer } from "@reduxjs/toolkit"
import { cartSlice } from "../features/cart/cartSlice";

let state = {
    owner: {},
    list: [
    ]
};

export const addProduct = createAction('ADD_PRODUCT', (product) => {
    return {
        payload: product
    }
})

export const removeProduct = createAction('REMOVE_PRODUCT', () => {})

export const applyVoucher = createAction('APPLY_VOUCHER', (voucher) => {
    return {
        payload: voucher
    }
})

export const updateFirstName = createAction('UPDATE_FIRSTNAME', (firstName) => {
    return {
        payload: firstName
    }
})

const reducer = createReducer(state, {
    [updateFirstName]: (currentState, action) => {
        const owner = {...currentState.owner, firstName: action.payload}
        return {...currentState, ...owner}
    }
})

export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            owner: reducer,
            list: cartSlice.reducer,
        })
    }
)
