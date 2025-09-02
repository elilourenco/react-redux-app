import {http} from "msw";
import {baseUrl} from "../api/apiSlice";
import {setupServer} from "msw/node";
import { fireEvent } from "@testing-library/react";
import  {ListCastMembers} from "./ListCastMembers";
import { Screen,waitFor,renderWithProviders } from "../../utils/test-utils";

const handlers = [
    http.get(`${baseUrl}/cast_members`,({request, params, cookies}) =>{
      return new  Response(JSON.stringify({}), { status: 200, headers: { "Content-Type": "application/json" } });
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
});