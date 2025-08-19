import { render } from "@testing-library/react";
import { CastMembersTable } from "./CastMembersTable";
import { GridFilterModel } from "@mui/x-data-grid";
import { BrowserRouter } from "react-router-dom";
import { CastMember } from "../../../types/CastMembers";


  type Meta ={
    to:number
    from:number
    path: string
    total:number
    perPage:number
    LastPage: number;
    currentPage: number;
}

type Links={
    
    first: string;
    last: string;
    prev: string;
    next: string;

}

type Results ={
    data:CastMember[];
    links:Links;
    meta:Meta;
}


const Props = {
   data: {} as Results,
    meta: {} as Meta,
    links:{} as Links,
        
    perPage: 10,
    isFetching: false,
    rowPerPage:[10,20,30],

    handleOnPageChange:(page:number)=>{},
    handleFilterChange:(filterModel: GridFilterModel) =>{},
    handleOnPageSizeChange:(perPage:number)=>{},
    handleDelete:(id:string) =>{},

}


describe("CastMemberTable",()=>{
    it("Should  render casMember table  correctly",()=>{
         const {asFragment} = render(<CastMembersTable  { ... Props}/>,{
            wrapper:BrowserRouter,
        
    });

        expect(asFragment()).toMatchSnapshot();
    });

    it("Should renders castMemberTable with loading",()=>{
        const {asFragment} = render(<CastMembersTable {... Props} isFetching />,{
            wrapper:BrowserRouter,
        })


        expect(asFragment()).toMatchSnapshot();
    });


    it("Should render castMembertable with Data",()=>{

        
    const {asFragment} = render(<CastMembersTable { ... Props} data={{ data:[], meta:{}} as any} />,{
            wrapper:BrowserRouter,

        });

        expect(asFragment()).toMatchSnapshot();
    })


    it("should render corret type",()=>{

        const {asFragment} = render(<CastMembersTable 
            { ... Props}
            data={{
                data:[{ ...Props.data.data[0], type: 2}],
                links:{ ...Props.data.links},
                meta:{ ...Props.data.meta, total:0}
            }}
             />,{
            wrapper: BrowserRouter,


        })

        expect(asFragment()).toMatchSnapshot();

    })
       
                      
})