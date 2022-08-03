export interface Root {
    timezone: string
    serverTime: number
    rateLimits: RateLimit[]
    exchangeFilters: any[]
    symbols: SymbolRoot[]
}

export interface RateLimit {
    rateLimitType: string
    interval: string
    intervalNum: number
    limit: number
}

export interface SymbolRoot {
    symbol: string
    status: string
    baseAsset: string
    baseAssetPrecision: number
    quoteAsset: string
    quotePrecision: number
    quoteAssetPrecision: number
    baseCommissionPrecision: number
    quoteCommissionPrecision: number
    orderTypes: string[]
    icebergAllowed: boolean
    ocoAllowed: boolean
    quoteOrderQtyMarketAllowed: boolean
    allowTrailingStop: boolean
    cancelReplaceAllowed: boolean
    isSpotTradingAllowed: boolean
    isMarginTradingAllowed: boolean
    filters: Filter[]
    permissions: string[]
}

export interface Filter {
    filterType: string
    minPrice?: string
    maxPrice?: string
    tickSize?: string
    multiplierUp?: string
    multiplierDown?: string
    avgPriceMins?: number
    minQty?: string
    maxQty?: string
    stepSize?: string
    minNotional?: string
    applyToMarket?: boolean
    limit?: number
    minTrailingAboveDelta?: number
    maxTrailingAboveDelta?: number
    minTrailingBelowDelta?: number
    maxTrailingBelowDelta?: number
    maxNumOrders?: number
    maxNumAlgoOrders?: number
}

export interface Ticker {
    symbol: string
    priceChange: string
    priceChangePercent: string
    weightedAvgPrice: string
    openPrice: string
    highPrice: string
    lowPrice: string
    lastPrice: string
    volume: string
    quoteVolume: string
    openTime: number
    closeTime: number
    firstId: number
    lastId: number
    count: number
}

export interface Ticker {
    data: Ticks[]
}

export interface Ticks {
    e: string
    E: number
    s: string
    p: string
    P: string
    w: string
    x: string
    c: string
    Q: string
    b: string
    B: string
    a: string
    A: string
    o: string
    h: string
    l: string
    v: string
    q: string
    O: number
    C: number
    F: number
    L: number
    n: number
}

export interface Symbol {
    symbol: string,
    open: string,
    high: string,
    low: string,
    close: string,
}