import {http} from "msw";
import {baseUrl} from "../api/apiSlice";
import {setupServer} from "msw/node";
import { fireEvent, screen } from "@testing-library/react";
import  {ListCastMembers} from "./ListCastMembers";
import { waitFor,renderWithProviders } from "../../utils/test-utils";

const handlers = [
    http.get(`${baseUrl}/cast_members`,({request, params, cookies}) =>{

        const url = new URL(request.url);
        if(url.searchParams.get("page") === "2"){
      return new  Response(JSON.stringify({}), { status: 200, headers: { "Content-Type": "application/json" } });
        }
    }),
]

const server = setupServer(...handlers);



describe('ListCastMembers', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
  it('should render correctly', () => {
    // Test implementation goes here

    const  { asFragment } = renderWithProviders(<ListCastMembers/>);
    expect(asFragment()).toMatchSnapshot(); 
  });

  it('should  render loading cast members', async () => {
    renderWithProviders(<ListCastMembers/>);
    
    expect(screen.getByRole('progressbar')).toBeInTheDocument();   
  });  
  
  it('should render sucess state', async () => {   
    renderWithProviders(<ListCastMembers/>); 
    await waitFor(() =>{
        const table= screen.getByRole("table");
        expect(table).toBeInTheDocument();
    })    
  });  
  
  it('should render error state', async () => {   
    server.use(
        http.get(`${baseUrl}/cast_members`, ({request,params,cookies}) => {
          return new Response(null, { status: 500 });
        })
      );
  
      renderWithProviders(<ListCastMembers/>);
      await waitFor(() =>{
          const alert= screen.getByText("Error loading cast members");
          expect(alert).toBeInTheDocument();
      })
    });

    it('should render empty state', async () => {   
        renderWithProviders(<ListCastMembers/>); 
        await waitFor(() =>{
            const alert= screen.getByText("No cast members found");
            expect(alert).toBeInTheDocument();
        })
        const button= screen.getByRole("button",{name:/add new/i});
        expect(button).not.toBeInTheDocument();
      });
    })
      
    it('should handle OnpageChange', async () => {   
        renderWithProviders(<ListCastMembers/>); 
        await waitFor(() =>{
            const table= screen.getByRole("table");
            expect(table).toBeInTheDocument();
        })


        const input= screen.getByPlaceholderText("spinbutton");
        fireEvent.change(input, {target: {value: '2'}});
    
        await waitFor(() =>{
            const loading= screen.getByRole("progressbar");
            expect(loading).not.toBeInTheDocument();
        }) 

        it('should handle delete Category sucess', async () => {   
            renderWithProviders(<ListCastMembers/>); 
            await waitFor(() =>{
                const table= screen.getByRole("table");
                expect(table).toBeInTheDocument();
            })

            const deleteButton= screen.getAllByTestId("DeleteIcon")[0];
            fireEvent.click(deleteButton);
        })
           
      })
    


