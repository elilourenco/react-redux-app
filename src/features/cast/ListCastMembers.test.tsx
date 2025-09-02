import { renderWithProviders } from "../../utils/test-utils";
import {htt} from "msw";
import  {ListCastMembers} from "./ListCastMembers";


describe('ListCastMembers', () => {
  it('should render correctly', () => {
    // Test implementation goes here

    const  { asFragment } = renderWithProviders(<ListCastMembers/>);
    expect(asFragment()).toMatchSnapshot(); 
  });
});