import { render } from "@testing-library/react";
import { CategoryForm } from "./CategoryForm";
import { BrowserRouter } from "react-router-dom";
import { it } from "node:test";



type  category ={
    id:number;
  first_Name: string;
  last_Name:string;
  email: string;
}

const  Props = {
    category:{} as  category,
    isdisabled:false,
    isLoading:false,
    handleSubmit:() => {},
    handleChange:() => {},
    handleToggle:() => {},

}


describe("CategoryForm",()=>{
    it("Should  render correctly",()=>{
        const {asFragment} = render(<CategoryForm {...Props} />,{
            wrapper: BrowserRouter,
        });
         expect( asFragment()).toMatchSnapshot()
    })

    it("Should",()=>{

        const {asFragment} = render(<CategoryForm {...Props} isLoading={null as any} isdisabled={null as any} />,{
            wrapper: BrowserRouter,
        });
         expect( asFragment()).toMatchSnapshot()
        
    })
})