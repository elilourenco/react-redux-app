import { render } from "@testing-library/react"; 
import { CastMemberForm } from "./CastMemberForm";
import { BrowserRouter } from "react-router-dom";


 type Meta ={
    to:number
    from:number
    path: string
    total:number
    perPage:number
    LastPage: number;
    currentPage: number;
}

type Links = {
  first: string;
  last: string;
  prev: null;
  next: string;
};

const Props ={
    castMember:{
    id: "",
    name: "",
    type: 0,
    deleteAt: null,
    createdAt: "",
    updateAt: "",
    data:[],
    links: {} as Links,
    meta:{}  as Meta

    },
    isdisabled:false,
    isLoading:false,
    handleSubmit:jest.fn(),
    handleChange:jest.fn(),
    handleToggle:jest.fn(),
    
}


describe("CastMemberForm",()=>{
    it("should render castMember Form correctly",()=>{
        const {asFragment} = render(<CastMemberForm {... Props} />, {
            wrapper: BrowserRouter,
        })

        expect(asFragment()).toMatchSnapshot();
    })


    it("should  render castMember form with Loading",()=>{
        const {asFragment} = render(<CastMemberForm {... Props} isLoading />,{
            wrapper :BrowserRouter,
        })
        expect(asFragment()).toMatchSnapshot();
    }) 

    it("should  render castMember form with disabled state",()=>{
        const {asFragment} = render(<CastMemberForm {... Props} isdisabled={true} isLoading={true} />,{
            wrapper :BrowserRouter,
        })
        expect(asFragment()).toMatchSnapshot();
    })
})