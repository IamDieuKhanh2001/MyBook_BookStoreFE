interface IPreOrder {
    user: {
        voucher: {
            hint: IVoucher[]
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