export interface  Results{
    meta:Meta,
    links: Links,
    data:Category[],

}


export interface Result{
    data:Category,
    meta: Meta,
    links:Links

}

 export interface Category{
    id:number,
    first_Name:string,
    last_Name: string,
    email:string
}

export interface Links{
    prev: null,
}


export interface Meta{
    to:number,
    from:number,
    path:string,
    total: number,
    per_page:number,
    last_page: number,
    current_page: number,
}

export interface CategoryParams{
    id: number | string,
    page?: number
    perPage: number
    serach?: string,
    isActive?: boolean,

}