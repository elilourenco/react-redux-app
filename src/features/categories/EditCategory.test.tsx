
import { setupServer } from "msw/lib/node";
import { fireEvent, renderWithProviders, screen, waitFor } from "../../utils/test-utils";
import CategoryEdit from "./EditCategory";
import { http } from "msw";
import { baseUrl } from "../api/apiSlice";




const data = {
    id: '1',
    first_Name: 'John',
    last_Name: 'Doe',
    email: "doe@email.com", 
    }              

const handlers = [
    http.get('/api/categories/:id', ({request, params, cookies}) => {
        return Response.json(data, { status: 200, headers: { "Content-Type": "application/json" }});
    }),

    http.put(`${baseUrl}/categories/1`, ({request, params, cookies}) => {
        return Response.json({...data, ...request.json()}, { status: 200, headers: { "Content-Type": "application/json" }});
    })
]; 


const server = setupServer(...handlers);


describe('EditCategory', () => {

   afterAll(() => server.close());
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
  it('renders correctly', () => {
    // Test implementation goes here

    const  { asFragment } = renderWithProviders(<CategoryEdit />);
    expect(asFragment()).toMatchSnapshot(); 
  });

  it("should fetch and display category data", async () => {
    renderWithProviders(<CategoryEdit />);
    const name = screen.getByText(/John/i);
    const email = screen.getByText(/doe@email.com/i);

    await waitFor(() => {
        expect(name).toHaveValue();
        
    })

    fireEvent.change(name, { target: { value: "Jane" } });
    fireEvent.change(email, { target: { value: "doe@email.com" } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);


    await waitFor(() => { 
        const text = screen.getByText(/Category updated successfully!/i);
        expect(text).toBeInTheDocument(); })
  })

  it("should show error message on fetch failure", async () => {
    server.use(
        http.put('/api/categories/:id', ({request, params, cookies}) => {
            return Response.json({ message: 'Failed to fetch category' }, { status: 500 });
        })
    );

    renderWithProviders(<CategoryEdit />);
    const name = screen.getByText(/John/i);
    const email = screen.getByText(/doe@email.com/i);
    
    await waitFor(() => {
        expect(name).toHaveValue();
    })

    fireEvent.change(name, { target: { value: "Jane" } });
    fireEvent.change(email, { target: { value: "doe@email.com" } });
    

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
})

})