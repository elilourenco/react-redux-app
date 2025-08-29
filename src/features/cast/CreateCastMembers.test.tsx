
import { render } from "@testing-library/react";
import { CreateCastMembers } from "./CreateCastMembers";
import { baseUrl } from "../api/apiSlice";
import { http } from "msw";

export const handlers =[
    http.post(`${baseUrl}/cast_members`, ({request, params, cookies}) => {
        return Response.json({...request.json()}, { status: 201, headers: { "Content-Type": "application/json" }});
    })
]

describe("CreateCastMember",()=>{
    it("Should  render correctly",()=>{
        const {asFragment} = render(
            
            <CreateCastMembers />
            
        );
        expect( asFragment()).toMatchSnapshot()
    })

})
        
      