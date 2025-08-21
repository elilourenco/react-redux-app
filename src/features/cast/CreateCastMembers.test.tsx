
import { render } from "@testing-library/react";
import { CreateCastMembers } from "./CreateCastMembers";
import { BrowserRouter } from "react-router-dom";


describe("CreateCastMember",()=>{
    it("Should  render correctly",()=>{
        const {asFragment} = render(
            <BrowserRouter>
                <CreateCastMembers />
            </BrowserRouter>
        
    );
         expect( asFragment()).toMatchSnapshot()
    })

})
        
      