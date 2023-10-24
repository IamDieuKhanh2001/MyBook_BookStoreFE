import { IBookLanguage } from "./IBookLanguage"

interface IBook {
    id: number
    isbn_code: string
    name: string
    price: number
    quantity: number
    desc: string
    weight: number
    number_of_pages: number
    publishing_year: number
    images: any[]
    ccategory: IChildCategory
    author: IAuthor
    book_form: IBookForm
    language: IBookLanguage
    provider: IProvider
    publisher: IPublisher
  }