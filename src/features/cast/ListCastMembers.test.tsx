import {http, HttpResponse} from "msw";
import {baseUrl} from "../api/apiSlice";
import {setupServer} from "msw/node";
import { fireEvent, screen } from "@testing-library/react";
import  {ListCastMembers} from "./ListCastMembers";
import { waitFor,renderWithProviders } from "../../utils/test-utils";

const handlers = [
    http.get(`${baseUrl}/cast_members`,({request, params, cookies}) =>{

        const url = new URL(request.url);
        if(url.searchParams.get("page") === "2"){
            
        return HttpResponse.json({data: [], total: 0, per_page: 20, current_page: 2},
           { status: 200, headers: { "Content-Type": "application/json" } });
      
        }
    }),
    http.delete(`${baseUrl}/cast_members/1`, ({request, params, cookies}) => {
        return HttpResponse.json({}, { status: 200, headers: { "Content-Type": "application/json" }});
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

          return HttpResponse.json({message: "Error loading cast members"}, {status: 500});
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

            await waitFor(() =>{
                const dialog= screen.getByRole("dialog");
                expect(dialog).toBeInTheDocument();
            })
        })

        it('should handle delete Category error', async () => {   
            server.use(
                http.delete(`${baseUrl}/cast_members/1`, ({request, params, cookies}) => {
                    return HttpResponse.json({ message: 'Failed to delete cast member' }, { status: 500, headers: { "Content-Type": "application/json" }});
                }),
            );
            
            renderWithProviders(<ListCastMembers/>);
            await waitFor(() =>{
                const table= screen.getByRole("table");
                expect(table).toBeInTheDocument();
            })
    
            const deleteButton= screen.getAllByTestId("DeleteIcon")[0];
            fireEvent.click(deleteButton);    

        })
           
      })
    


