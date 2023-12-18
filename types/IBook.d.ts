import { IBookLanguage } from "./IBookLanguage"

interface IBook {
  id: number
  isbn_code: string
  name: string
  slug: string
  price: number
  quantity: number
  desc: string
  weight: number
  number_of_pages: number
  publishing_year: number
  images: IProductImage[]
  ccategory: IChildCategory
  author: IAuthor
  book_form: IBookForm
  language: IBookLanguage
  provider: IProvider
  publisher: IPublisher
  flash_sale_info?: {
    is_flash_sale: boolean,
    original_price: number,
    discount_percent: number,
    price_after_discount: number,
    time_takes_place?: {
      time_start: string,
      time_end: string,
    }
    instock_info?: {
      sold_number: number,
      instock: number,
    }
  }
  comment_info?: {
    total_comment: number
    avg_star: number
  }
}
