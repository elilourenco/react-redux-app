export interface  Results{
    meta:Meta,
    links: Links,
    data:Genre[],

}


export interface Result{
    data:Genre,
    meta: Meta,
    links:Links

}

 export interface Genre{
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

export interface GenreParams{
    id: number | string,
    page?: number
    perPage: number
    serach?: string,
    isActive?: boolean,

}

export interface GenrePlayload{
    id:number | string
    first_Name:string,
    last_Name: string,
    email: string,
}