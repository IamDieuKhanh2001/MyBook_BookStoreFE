import { IBook } from "./IBook"

interface ICartItem {
    id: number
    isbn_code: string
    quantity: number
    book_info: IBook
}