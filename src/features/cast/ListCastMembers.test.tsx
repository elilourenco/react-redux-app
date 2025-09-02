import http from "msw";
import { setupServer } from "msw/lib/node";
import { fireEvent, renderWithProviders, screen, waitFor } from "../../utils/test-utils";
import { ListCastMembers } from "./ListCastMembers";
import { baseUrl } from "../api/apiSlice";
import { castMemberResponse2 } from "./mocks";


const handlers = [ 
  http.get(`${baseUrl}/cast_members`, ({request, params, cookies}) => { 
  if(request.url.searchParams.get("page") === "2")  {}
    return Response.json(castMemberResponse2, { status: 200, headers: { "Content-Type":"application/json" }});
   
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

  it("should handle pagination", async ()=>{
    renderWithProviders(<ListCastMembers/>);
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    await waitFor(() => {
      const page2Item = screen.getByText(/Jane Smith/i);
      expect(page2Item).toBeInTheDocument();
    });

    const prevButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(prevButton);
    
    await waitFor(() => {
      const page1Item = screen.getByText(/John Doe/i);
      expect(page1Item).toBeInTheDocument();
    });
  })

  it("should delete previous button on first page", async ()=>{  
    renderWithProviders(<ListCastMembers/>);
    await waitFor(() => {
      const prevButton = screen.queryByRole("button", { name: /previous/i });
      expect(prevButton).not.toBeInTheDocument();
    });

    const deleteButton = screen.getAllByTestId("delete-button")[0];
    fireEvent.click(deleteButton);
  });
    
  })




      
  
  




