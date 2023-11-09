interface IVoucher {
    id: number
    voucher_name: string
    voucher_type: string
    voucher_code: string
    discount_percentage: number
    discount_max_price: any
    count_used: number
    limited: number
    desc: string
    start_date: string
    end_date: string
    status: string
  }