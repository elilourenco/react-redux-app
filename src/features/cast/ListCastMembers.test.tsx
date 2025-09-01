import http from "msw";
import { setupServer } from "msw/lib/node";
import { fireEvent, renderWithProviders, screen, waitFor } from "../../utils/test-utils";
import { ListCastMembers } from "./ListCastMembers";
import { baseUrl } from "../api/apiSlice";
import { castMemberResponse } from "./mocks";


const handlers = [ 
  http.get(`${baseUrl}/cast_members`, ({request, params, cookies}) => {
    return Response.json(castMemberResponse, { status: 200, headers: { "Content-Type":"application/json" }});
   
      })
];


const server = setupServer(...handlers);

describe("ListCastMembers",()=>{

  afterAll(() => server.close());
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());      

  it("should render ListCastMembers corretly", async ()=>{
    const {asFragment} = renderWithProviders(<ListCastMembers/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should fetch and display cast members", async ()=>{
    renderWithProviders(<ListCastMembers/>);
    const name = screen.getByText(/John Doe/i);
    const type = screen.getByText(/1/i);

    await waitFor(() => {
        expect(name).toBeInTheDocument();
        
    })
  })

  it("should handle fetch error", async ()=>{
    server.use(
      http.get(`${baseUrl}/cast_members`, ({request, params, cookies}) => {
        return Response.json({message: "Internal Server Error"}, { status: 500, headers: { "Content-Type":"application/json" }});
      })
    );

    renderWithProviders(<ListCastMembers/>);
    await waitFor(() => {
      const errorMessage = screen.getByText(/Error fetching cast members/i);
      expect(errorMessage).toBeInTheDocument();
    });
  })

})
      
  
  




