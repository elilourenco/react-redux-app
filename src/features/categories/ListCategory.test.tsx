import { http } from "msw";
import {setupServer} from "msw/node";


import { renderWithProviders, screen, waitFor } from "../../utils/test-utils";
import  CategoryList  from "./ListCategory";
import { baseUrl } from "../api/apiSlice";
import { categoryResponse } from "../cast/mocks";

export const handlers = [
    http.get(`${baseUrl}/categories`,({request, params, cookies}) =>{

      return Response.json(categoryResponse);
      console.log("request", request);
    }),

];

const server = setupServer(...handlers);



describe("ListCategory",()=>{
  afterAll(() => server.close());
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());

  it("renders CategoryList component",()=>{
        const {asFragment} = renderWithProviders(<CategoryList/>);
        expect(asFragment()).toMatchSnapshot();
  });


    it("should display categories", ()=>{
    renderWithProviders(<CategoryList/>);
    const loading= screen.getByRole("progressbar");
    expect(loading).toBeInTheDocument();    
});

    it("should render sucess state", async ()=>{
        renderWithProviders(<CategoryList/>);
        
         await waitFor(() =>{
          const name= screen.getByText("Emily");
          expect(name).toBeInTheDocument();
         })
    })

})
  

 
