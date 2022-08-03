import { Symbol } from "../models/crypto.models";
import { Order } from "../models/order.models";

export interface AppState {
    loggedIn: boolean;
    currentSymbol: string;
    symbols: Symbol[];
    orders: Order[];
    error: string;
}