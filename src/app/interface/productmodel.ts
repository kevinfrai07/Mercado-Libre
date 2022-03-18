export interface ProductModel {
    id: String,
    title: String,
    price: number,
    currency_id: string,
    pictures: Array<{
        id:string,
        max_size: string,
        quality: string,
        secure_url: string,
        size: string,
        url: string
    }> | "",
    condition: String,
    sold_quantity: Number,
}
