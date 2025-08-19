import { render } from "@testing-library/react";
import { CastMembersTable } from "./CastMembersTable";
import { GridFilterModel } from "@mui/x-data-grid";
import { BrowserRouter } from "react-router-dom";



const Props = {
    data:[
        {
                    
            id:"123",
            type:1,
            name:"test",
            deletedAt: null,
            createdAt :"",
            updatedAt:""

                    
        },
    ],
    meta:
        {
            currentPage: 1,
            form:1,
            lastPage: 1,
            path:"https://dummyjson.com/users",
            perPage: 1,
            to:1,
            total:1
        },
            links:{
            first:"https://dummyjson.com/users",
            last: "https://dummyjson.com/users",
            prev:"",
            next:"",
                 
            },
        

    perPage: 10,
    isFetching: false,
    rowPerPage:[10,20,30],


    handleOnPageChange:(page:number)=>{},
    handleFilterChange:(filterModel: GridFilterModel) =>{},
    handleOnPageSizeChange:(perPage:number)=>{},
    handleDelete:(id:string) =>{},


}


describe("CastMemberTable",()=>{
    it("should  render casMember table  correctly",()=>{
         const {asFragment} = render(<CastMembersTable  { ... Props}/>,{
            wrapper:BrowserRouter,
        
    });

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders castMemberTable with loading",()=>{
        const {asFragment} = render(<CastMembersTable {... Props} isFetching />,{
            wrapper:BrowserRouter,
        })


        expect(asFragment()).toMatchSnapshot();
    });


    it("render castMembertable with Data",()=>{

        const data = {
            data:[
                {
                    
                    id:"123",
                    type:1,
                    name:"test",
                    deletedAt: null,
                    createdAt :"",
                    updatedAt:""

                    
                },
            ],
            meta: {
                currentPage: 1,
                form:1,
                lastPage: 1,
                path:"https://dummyjson.com/users",
                perPage: 1,
                to:1,
                total:1
            },
            links:{
                 first:"https://dummyjson.com/users",
                 last: "https://dummyjson.com/users",
                 prev:"",
                 next:"",
                 
            }
        }
        const {asFragment} = render(<CastMembersTable { ... Props} data={{}} />,{
            wrapper:BrowserRouter,

        });

        expect(asFragment()).toMatchSnapshot();
    })
       
                      
})