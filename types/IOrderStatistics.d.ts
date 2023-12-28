interface IOrderStatistics {
    status: Status[]
    payment_status: paymentStatus[]
}

interface Status {
    status: string
    total: number
}

interface paymentStatus {
    status: string
    total: number
}