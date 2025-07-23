

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

 export interface  Category{
    id:string,
    name:string,
    deleted_at: string,
    is_active:boolean,
    created_at: string,
    update_at:String,
    description: null | string
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
    page?: number
    perPage: number
    serach?: string,
    isActive?: boolean,

}