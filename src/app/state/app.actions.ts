import { createAction, props } from "@ngrx/store";
import { Symbol } from "../models/crypto.models";
import { Login } from "../models/login.models";
import { Order } from "../models/order.models";

// export const loadSymbols = createAction(
//     '[Symbols] Load'
// );
// export const loadSymbolsSuccess = createAction(
//     '[Symbols] Load Success',
//     props<{ symbols: Symbol[] }>()
// );
// export const loadSymbolsFailure = createAction(
//     '[Symbols] Load Fail',
//     props<{ error: string }>()
// );


// export const setCurrentSymbol = createAction(
//     '[Symbols] Set Current Symbol',
//     props<{ currentSymbol: string }>()
// );
// export const clearCurrentSymbol = createAction(
//     '[Symbols] Clear Current Symbol',
// );


// export const placeOrder = createAction(
//     '[Order] Place Order',
//     props<{ order: Order }>()
// );
// export const placeOrderSuccess = createAction(
//     '[Order] Place Order Success',
//     props<{ order: Order }>()
// );
// export const placeOrderFailure = createAction(
//     '[Order] Place Order Failure',
//     props<{ error: string }>()
// );


// export const loadOrders = createAction(
//     '[Orders] Load'
// );
// export const loadOrdersSuccess = createAction(
//     '[Orders] Load Success',
//     props<{ orders: Order[] }>()
// );
// export const loadOrdersFailure = createAction(
//     '[Orders] Load Fail',
//     props<{ error: string }>()
// )

// export const loginAction = createAction(
//     '[Login] User Login',
//     props<{ login: Login }>()
// );
// export const loginActionSuccess = createAction(
//     '[Login] User Login Success',
//     props<{ loggedIn: boolean }>()
// );
// export const loginActionFailure = createAction(
//     '[Login] User Login Failure',
//     props<{ error: string }>()
// );

export const loginStatusUpdate = createAction(
    '[Login] Login Status Update',
    props<{ loggedIn: boolean }>()
);
// export const loginStatusUpdateSuccess = createAction(
//     '[Login] Login Status Update Success',
//     props<{ loggedIn: boolean }>()
// );
// export const loginStatusUpdateFailure = createAction(
//     '[Login] Login Status Update Failure',
//     props<{ error: string }>()
// );
export const setCurrentSymbol = createAction(
    '[Home] Set Current Symbol',
    props<{ symbol: string }>()
);
export const updateOHLC = createAction(
    '[Home] Update OHLC',
    props<{ ticks: Symbol[] }>()
);