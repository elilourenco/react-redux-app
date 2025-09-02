import  {http} from "msw"
import { fireEvent, renderWithProviders, screen, waitFor } from "../../utils/test-utils";
import  Createcategory from "./CreateCategory";
import { baseUrl } from "../api/apiSlice";
import { categoryResponse } from "../cast/mocks";


export const handlers = [
    http.post(`${baseUrl}/categories`, ({request, params, cookies}) => {
      return new  Response(JSON.stringify(categoryResponse), { status: 201, headers: { "Content-Type": "application/json" }});
    }),
];


describe("CreateCategory",()=>{
 

  it("should render CreateCategory component",()=>{
        const {asFragment} = renderWithProviders(<Createcategory/>);
        expect(asFragment()).toMatchSnapshot();
  });


  it("should create a new category", async ()=>{
    renderWithProviders(<Createcategory/>);

    const first_NameInput = screen.getByLabelText(/first_Name/i);
    const last_NameInput = screen.getByLabelText(/last_Name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });


    fireEvent.change(first_NameInput, { target: { value: "John" } });
    fireEvent.change(last_NameInput, { target: { value: "Doe" } });
    fireEvent.change(emailInput, {target: { value: "doe@email.com"}})

    fireEvent.click(submitButton);

    await waitFor(() => {
      const successMessage = screen.getByText(/Category created successfully!/i);
      expect(successMessage).toBeInTheDocument();
    });

});

})
