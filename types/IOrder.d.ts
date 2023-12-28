interface IOrder {
  id: number
  product_price: number
  fee_price: number
  final_price: number
  discount_price: number
  voucher: string
  payment_method: string
  status: string
  payment_status: string
  customer_note: string
  created_at: string | null
  updated_at: string | null
  review?: {
    id: number
    order_id: number
    rate_star: string
    review_comment: string
    created_at: string
    updated_at: string
  }
  payment?: {
    name: string
  } 
  invoice?: {
    id: number
    pay_url: string
  }
  user: UserInfo
  userAddress: IUserAddress
  items?: ItemOrdered[]
}

interface ItemOrdered {
  quantity: number
  price_per_unit: number
  product: Product
}

interface Product {
  id: number
  isbn_code: string
  images: IProductImage[]
  name: string
  slug: string
  price: number
  quantity: number
  desc: string
  weight: number
  number_of_pages: number
  publishing_year: number
}