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