
import { setupServer } from "msw/lib/node";
import { renderWithProviders, screen, waitFor } from "../../utils/test-utils";
import CategoryEdit from "./EditCategory";
import { http } from "msw";
import { wait } from "@testing-library/user-event/dist/utils";



const data = {
    id: '1',
    first_Name: 'John',
    last_Name: 'Doe',
    email: "doe@email.com", 
    }              

const handlers = [
    http.get('/api/categories/:id', ({request, params, cookies}) => {
        return Response.json(data, { status: 200, headers: { "Content-Type": "application/json" }});
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
  })
});