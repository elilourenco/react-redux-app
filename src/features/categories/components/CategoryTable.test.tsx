import { render } from "@testing-library/react";
import { CategoriesTable } from "./CategoryTable"
import { BrowserRouter } from "react-router-dom";



type  Results ={
    meta:Meta,
    links: Links,
    data:Category[],

}


type Links ={
    prev: null,
}


type Meta ={
    to:number,
    from:number,
    path:string,
    total: number,
    per_page:number,
    last_page: number,
    current_page: number,
}

type  Category ={
    id:number,
    first_Name:string,
    last_Name: string,
    email:string
}



const  Props ={
    data:{} as Results,
    meta:{} as Meta,
    links:{} as Links,
    perPage: 1,
    isFetching: false,
    rowsPerPage:[10,20,30],

    handleOnPageChange:() => {},
    handleFilterChange:() => {} ,
    handleOnPageSizeChange:() => {},
    handleDelete:() => {},

}




describe("CategoryTable",()=>{
    it("should render correctly",() =>{
        const {asFragment} = render(<CategoriesTable {... Props} />)

        expect(asFragment()).toMatchSnapshot()

    })


    it("should render Categorytable is loading",()=>{
        const {asFragment} = render(<CategoriesTable  {... Props} />)

        expect(asFragment()).toMatchSnapshot()
    })

    it("Should render Categorytable is Loading",()=>{
        const {asFragment}= render(<CategoriesTable {...Props} data={{data:[], meta:{}}  as any}  />,
            {wrapper:BrowserRouter}
        )
       

        expect(asFragment()).toMatchSnapshot()
    })



    it("should render CategoryTable with Inative value", () =>{

        const  {asFragment}= render(
            <CategoriesTable { ...Props}  /> 

        )
        expect(asFragment()).toMatchSnapshot()

    })


   

    
})