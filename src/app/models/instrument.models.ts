export interface Tokens {
    tokens: Token[]
}

export interface Token {
    token: string
    symbol: string
    name: string
    expiry: string
    strike: string
    lotsize: string
    instrumenttype: string
    exch_seg: string
    tick_size: string
}