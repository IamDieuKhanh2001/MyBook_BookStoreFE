import { IFlashSaleBook } from "./IFlashSaleBook"

interface IFlashSalePeriod {
    id: number
    flash_sale_id: number
    percent_discount: number
    time_start: string
    time_end: string
    created_at: string
    updated_at: string
    products: IFlashSaleBook[]
}