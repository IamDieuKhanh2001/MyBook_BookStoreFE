interface IProductComment {
    id: number
    rate_star: string
    content: string
    created_at: string
    updated_at: string
    user: {
        id: number
        email: string
        profile?: IProfile
    }
}