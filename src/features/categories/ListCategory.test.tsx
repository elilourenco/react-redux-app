import {rest} from "msw";
import {setupServer} from "msw/node";

import { renderWithProviders } from "../../utils/test-utils";
import {CategoryList} from "./ListCategory";
import { baseUrl } from "../api/apiSlice";
import { categoryResponse } from "../cast/mocks";

export const handlers = [
    rest.get(`${baseUrl}/categories`,(_, res, ctx) =>{

      return res( ctx.json(categoryResponse), ctx.delay(150))
    }),

];

const server = setupServer(...handlers);



describe("ListCategory",()=>{
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());

    it("renders CategoryList component",()=>{
        const {asFragment} = renderWithProviders(<CategoryList/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

  

 
