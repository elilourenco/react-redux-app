import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/lib/node';
import {fireEvent, renderWithProviders, screen, waitFor} from '../../utils/test-utils';
import { EditCastMember } from './EditCastMember';
import {baseUrl} from '../api/apiSlice';

const data = {
  id: '1',
  name: 'John Doe',
  type: 1,
};

const handlers = [
  http.get('/api/cast_members/:id', ({request, params, cookies}) => {
    return HttpResponse.json(data, {status: 200, headers: {'Content-Type': 'application/json'},});
  }),

  http.put(`${baseUrl}/cast_members/1`, ({request, params, cookies}) => {
    const responseData = {...data, ...request.json()};         
    return HttpResponse.json(responseData, {status: 200, headers: {'Content-Type': 'application/json'},});
  }),
];

const server = setupServer(...handlers);

describe('EditCastMember', () => {
  afterAll(() => server.close());
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());

it('should renders correctly', () => {
    const {asFragment} = renderWithProviders(<EditCastMember />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle submit', async () => {
    renderWithProviders(<EditCastMember />);
    const name = screen.getByTestId(/name/i);
    const type = screen.getByTestId(/type/i); 

    await waitFor(() => {
      expect(name).toHaveValue('John Doe');
      
    });

    await waitFor(() => {  
        
        expect(name).toHaveValue('name');
    });

    fireEvent.change(name, {target: {value: 'Jane'}});
    fireEvent.change(type, {target: {value: '2'}});

    const submitButton = screen.getByRole('button', {name: /submit/i});
    fireEvent.click(submitButton);

    await waitFor(() => {
      const name = screen.getByTestId(/name/i);
      
      expect(name).toBeInTheDocument();
      
    });

  })
});