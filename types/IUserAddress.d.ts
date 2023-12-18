interface IUserAddress {
    id: number
    recipient_name: string
    recipient_phone: string
    street: string
    is_default: number
    wards: {
        wards_id: number
        name: string
        district: {
            district_id: number
            name: string
            province: {
                province_id: number
                name: string
            }
        }
    }
}