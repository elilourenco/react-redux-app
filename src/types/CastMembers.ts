
export interface  Results{
    data:CastMember[];
    links:Links;
    meta:Meta;
}

export interface  Result{
    data:CastMember;
    links:Links;
    meta:Meta;
}

export interface CastMember {
    id: string;
    name:string;
    type:number;
    deleteAt: boolean | null;
    createdAt: string;
    updateAt: string;
    data: Datum[];
    links: Links;
    meta: Meta;

}

export interface Datum {
    id: string;
    name: string;
    type:number;
    deleteAt: null;
    createdAt: string;
    updateAt:string;

}


export interface Links{
    first: string;
    last: string;
    prev: string;
    next: string;
}

export interface Meta {
    to:number
    from:number
    path: string
    total:number
    perPage:number
    LastPage: number;
    currentPage: number;
}


export interface CastMemberParams{
    page?: number;
    perPage?: number;
    search?: string;
    type?: number;
}
