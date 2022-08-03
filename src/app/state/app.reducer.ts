import { state } from "@angular/animations";
import { on, createReducer, createFeatureSelector, createSelector } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";

import * as AppActions from './app.actions';
import { AppState } from "./app.state";

const initialState: AppState = {
    loggedIn: false,
    currentSymbol: '',
    orders: [],
    symbols: [
        { symbol: 'BTCUSDT', open: '', high: '', low: '', close: '', },
        { symbol: 'ETHUSDT', open: '', high: '', low: '', close: '', },
    ],
    error: ''
}

//> Order of const variables matters here
const getState = createFeatureSelector<AppState>('state');

// export const getCurrentSymbolName = createSelector(
//     getState,
//     state => state.currentSymbol
// );
// export const getCurrentSymbolData = createSelector(
//     getState,
//     getCurrentSymbolName,
//     (state, currentSymbol) => {
//         return currentSymbol ? state.symbols.find(p => p.symbol === currentSymbol) : null;
//     }
// );
// export const getSymbols = createSelector(
//     getState,
//     state => state.symbols,
// );
// export const getError = createSelector(
//     getState,
//     state => state.error
// );
export const getLoginStatus = createSelector(
    getState,
    state => state.loggedIn
);
export const getCurrentSymbolName = createSelector(
    getState,
    state => state.currentSymbol
);
export const getCurrentSymbol = createSelector(
    getState,
    getCurrentSymbolName,
    (state, currentSymbol) => {
        if (currentSymbol === '') {
            return null;
        } else {
            let symbol = state.symbols.find(p => p.symbol === currentSymbol);
            if (symbol)
                return symbol;
            else
                return null;
        }
    }
);

export const appReducer = createReducer<AppState>(
    initialState,
    // on(AppActions.loginActionSuccess, (state, action): AppState => {
    //     return {
    //         ...state,
    //         loggedIn: action.loggedIn,
    //         error: ''
    //     };
    // }),
    // on(AppActions.loginActionFailure, (state, action): AppState => {
    //     return {
    //         ...state,
    //         loggedIn: false,
    //         error: action.error
    //     };
    // }),
    on(AppActions.loginStatusUpdate, (state, action): AppState => {
        return {
            ...state,
            loggedIn: action.loggedIn,
            error: ''
        };
    }),
    on(AppActions.setCurrentSymbol, (state, action): AppState => {
        return {
            ...state,
            currentSymbol: action.symbol
        };
    }),
    on(AppActions.updateOHLC, (state, action): AppState => {
        return {
            ...state,
            symbols: action.ticks
        };
    }),
    // on(AppActions.loginStatusUpdateSuccess, (state, action): AppState => {
    //     return {
    //         ...state,
    //         loggedIn: action.loggedIn,
    //         error: ''
    //     };
    // }),
    // on(AppActions.loginStatusUpdateFailure, (state, action): AppState => {
    //     return {
    //         ...state,
    //         loggedIn: false,
    //         error: action.error
    //     };
    // })
    // on(AppActions.clearCurrentSymbol, (state): AppState => {
    //     return {
    //         ...state,
    //         currentSymbol: null
    //     };
    // }),
    // on(AppActions.loadSymbolsSuccess, (state, action): AppState => {
    //     return {
    //         ...state,
    //         symbols: action.symbols,
    //         error: ''
    //     };
    // }),
    // on(AppActions.loadSymbolsFailure, (state, action): AppState => {
    //     return {
    //         ...state,
    //         symbols: [],
    //         error: action.error
    //     };
    // }),
    // on(AppActions.placeOrderSuccess, (state, action): AppState => {
    //     return {
    //         ...state,
    //         orders: [...state.orders, action.order],
    //         error: ''
    //     };
    // }),
    // on(AppActions.placeOrderFailure, (state, action): AppState => {
    //     return {
    //         ...state,
    //         error: action.error
    //     };
    // }),
    // on(AppActions.loadOrdersSuccess, (state, action): AppState => {
    //     return {
    //         ...state,
    //         orders: action.orders,
    //         error: ''
    //     };
    // }),
    // on(AppActions.loadOrdersFailure, (state, action): AppState => {
    //     return {
    //         ...state,
    //         orders: [],
    //         error: action.error
    //     };
    // }),
);