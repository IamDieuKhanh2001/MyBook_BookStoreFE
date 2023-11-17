interface IPreOrder {
    user: {
        voucher: {
            hints: IVoucher[]
        }
    },
    paymentMethods: IPaymentType[],
    orders: {
        price: {
            productPrice: number
            shipFee: number
            total: number
        },
        carts: ICartItem[]
    }
}