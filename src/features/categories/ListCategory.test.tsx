import { http } from "msw";
import {setupServer} from "msw/node";
import { fireEvent, renderWithProviders, screen, waitFor } from "../../utils/test-utils";
import  CategoryList  from "./ListCategory";
import { baseUrl } from "../api/apiSlice";
import { categoryResponse } from "../cast/mocks";


export const handlers = [
    http.get(`${baseUrl}/categories`,({request, params, cookies}) =>{

      const url = new URL(request.url);
      if(url.searchParams.get("page") === "2"){
        return new Response(JSON.stringify(categoryResponse), { status: 200, headers: { "Content-Type": "application/json" } });
      }

      return new  Response(JSON.stringify(categoryResponse), { status: 200, headers: { "Content-Type": "application/json" } });
    }),
    http.delete(`${baseUrl}/categories/1`, ({request, params, cookies}) => {
      return new Response(JSON.stringify({}), { status: 200, headers: { "Content-Type": "application/json" }});
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


    it("should render error state", async ()=>{
      server.use(
        http.get(`${baseUrl}/categories`, ({request,params,cookies}) => {
          //return Response.json(categoryResponse, {status: 500});
        })
      );

      renderWithProviders(<CategoryList/>);

      await waitFor(() =>{
        const error= screen.getByText(/Error fetching categories/i);
        expect(error).toBeInTheDocument();
      })

      it("should handle OnpageChange", async ()=>{
        renderWithProviders(<CategoryList/>);

        await waitFor(() =>{
          const name= screen.getByText("name");
          expect(name).toBeInTheDocument();
      
        });

         const nextButton= screen.getByTestId("KeyboardArrowRightIcon");
         fireEvent.click(nextButton);
      
      });


      it("should handle filter change", async ()=>{
        renderWithProviders(<CategoryList/>);
        // esperar que o elemento seja renderizado
        await waitFor(() =>{
          const name= screen.getByText("name");
          expect(name).toBeInTheDocument();
        }) 
        
        const input = screen.getByPlaceholderText("search");

        // Fire event change
        fireEvent.change(input, {
          target: {
            value: "test",
          },

        });

        await waitFor(() =>{
          const  loading = screen.getByRole("progressbar");
          expect(loading).toHaveValue("test");
      })
    })

    it("should handle delete category", async ()=>{
      renderWithProviders(<CategoryList/>);
      // esperar que o elemento seja renderizado
      await waitFor(() =>{
        const name= screen.getByText("name");
        expect(name).toBeInTheDocument();
      })

      const deleteButton= screen.getByTestId("delete-button");
      fireEvent.click(deleteButton);

      await waitFor(() =>{
        const  loading = screen.getByRole("progressbar");
        expect(loading).toBeInTheDocument();
      })
    })

    it("should handle delete category error", async ()=>{
      renderWithProviders(<CategoryList/>);
    })
      
})

})
  

 
