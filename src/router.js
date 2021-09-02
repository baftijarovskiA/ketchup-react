import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import MeetPage from "./pages/Meet";
import NotFoundPage from "./pages/NotFound";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/meet/:id' exact component={MeetPage} />
            <Route path='/*' exact component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default Routes;