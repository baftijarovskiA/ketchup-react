import {BrowserRouter, Route} from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Route path='/' exact render={() => <h1>Hello</h1>} />
    </BrowserRouter>
)

export default Routes;