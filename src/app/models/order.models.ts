export interface Order {
    id: number;
    orderType: string;
    symbol: string;
    quantity: number;
    entryPrice: number;
    exitPrice: number;
    timestamp: number;

    // contructor(
    //     id: number,
    //     symbol: string,
    //     qty: number,
    //     buyPrice: number,
    //     sellPrice: number,
    //     timestamp: Date) {
    // }
}

export interface OrderSimple {
    orderType: string;
    quantity: number;
}

export interface Position {
    id: number;
    orderType: string;
    symbol: string;
    quantity: number;
    entryPrice: number;
    exitPrice: number;
    timestamp: number;
    lastPrice: number;
    profitLoss: number;
}