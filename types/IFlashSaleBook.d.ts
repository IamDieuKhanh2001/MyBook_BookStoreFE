import { IBook } from "./IBook"

interface IFlashSaleBook {
    id: number
    flash_sale_hour_id: number
    isbn_code: string
    created_at: string
    updated_at: string
    product_info: IBook
}