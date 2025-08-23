
import { render } from "@testing-library/react";
import { CreateCastMembers } from "./CreateCastMembers";

describe("CreateCastMember",()=>{
    it("Should  render correctly",()=>{
        const {asFragment} = render(
            
            <CreateCastMembers />
            
        );
        expect( asFragment()).toMatchSnapshot()
    })

})
        
      