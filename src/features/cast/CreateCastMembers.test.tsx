
import { render } from "@testing-library/react";
import { CreateCastMembers } from "./CreateCastMembers";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


describe("CreateCastMember",()=>{
    it("Should  render correctly",()=>{
        const {asFragment} = render(
            
                <CreateCastMembers />
            
        
    );
         expect( asFragment()).toMatchSnapshot()
    })

})
        
      