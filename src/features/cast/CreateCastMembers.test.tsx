
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CreateCastMembers } from "./CreateCastMembers";
import { baseUrl } from "../api/apiSlice";
import { http } from "msw";
import { setupServer } from "msw/lib/node";
import { renderWithProviders } from "../../utils/test-utils";

export const handlers =[
    http.post(`${baseUrl}/cast_members`, ({request, params, cookies}) => {
        return Response.json({...request.json()}, { status: 201, headers: { "Content-Type": "application/json" }});
    })
]

const server = setupServer(...handlers);

describe("CreateCastMember",()=>{

    afterAll(() => server.close());
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());

     
    it("Should  render correctly", async ()=>{
        const {asFragment} = render(<CreateCastMembers />);
        expect( asFragment()).toMatchSnapshot()
    })


    it("should  render  correctly", async() =>{
        renderWithProviders(<CreateCastMembers/>)
        const name= screen.getByTestId("name");
      
        fireEvent.change(name, { target: { value: "John Doe" } });

        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

    

        await waitFor(() => {
        const name = screen.getByTestId("name");
        
        
        expect(name).toBeInTheDocument();
        
        
    })

    it("should  handle  submit  error", async () =>{
         server.use(
            http.post(`${baseUrl}/cast_members`, ({request, params, cookies}) => {
                 return Response.json({request,params, cookies})
            })
         )


         renderWithProviders(<CreateCastMembers/>)
         const name= screen.getByTestId("name");
      
        fireEvent.change(name, { target: { value: "John Doe" } });

        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);
        
        await waitFor(() => {
            const name = screen.getByTestId("name");
            
            
            expect(name).toBeInTheDocument();   
        })
    })
})

})
            