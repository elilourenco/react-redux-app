import { renderWithProviders } from "../../utils/test-utils";
import CategoryEdit from "./EditCategory";





describe('EditCategory', () => {
  it('renders correctly', () => {
    // Test implementation goes here

    const  { asFragment } = renderWithProviders(<CategoryEdit />);
    expect(asFragment()).toMatchSnapshot(); 
  });
});