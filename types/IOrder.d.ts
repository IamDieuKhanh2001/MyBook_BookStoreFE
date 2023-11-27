interface IOrder {
  id: number
  product_price: number
  fee_price: number
  final_price: number
  discount_price: number
  voucher: string
  userAddress: IUserAddress
  payment_method: string
  status: string
  customer_note: string
  created_at: string | null
  updated_at: string | null
  user: {
    id: number
    email: string
    money: number
    user_level_id: number
    user_role_id: number
    is_email_verified: number
    deleted_at: string | null
  }
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