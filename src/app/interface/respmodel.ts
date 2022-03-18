export interface RespModel {
    author: {
        name: "Kevin Esteban",
        lastname: "Fraile Sanchez"
    },
    available_filters: object,
    available_sorts: object,
    country_default_time_zone: string,
    filters: object;
    paging: {
        total: number,
        primary_results: number,
         offset: number,
        limit: number
    },
    query: string,
    results: 
    {
        id: String,
        title: String,
        price: {
            currency: String,
            amount: Number,
            decimals: Number,
        },
        picture: String,
        condition: String,
        free_shipping: Boolean,
        sold_quantity: Number,
        description: String,
        length: number
    },
    site_id: string,
}
