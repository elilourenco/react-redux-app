import { render } from "@testing-library/react";
import Layout from "./Layout";


describe("Layout",()=>{
    it("Should  render correctly",()=>{

        const {asFragment} = render(
        <Layout>
            <div>test</div>
        </Layout>);

         expect( asFragment()).toMatchSnapshot()
    })

})