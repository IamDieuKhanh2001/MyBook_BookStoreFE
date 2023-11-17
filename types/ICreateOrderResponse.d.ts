interface ICreateOrderResponse {
    message: string
    payment: {
        method: string
        url: string | null
    }
}