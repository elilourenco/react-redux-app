import  {http} from "msw";
import {setupServer} from "msw/node";
import { fireEvent, renderWithProviders, screen, waitFor } from "../../utils/test-utils";
import  Createcategory from "./CreateCategory";
import { baseUrl } from "../api/apiSlice";
import { categoryResponse } from "../cast/mocks";




export const handlers = [
    http.post(`${baseUrl}/categories`, ({request, params, cookies}) => {
      return Response.json(categoryResponse, { status: 201, headers: { "Content-Type": "application/json" }});
    }),
];


describe("CreateCategory",()=>{
 

  it("should render CreateCategory component",()=>{
        const {asFragment} = renderWithProviders(<Createcategory/>);
        expect(asFragment()).toMatchSnapshot();
  });

});