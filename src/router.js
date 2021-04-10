import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import MeetPage from "./pages/Meet";
import AccountPage from "./pages/Account";
import NotFoundPage from "./pages/NotFound";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/meet/:id' exact component={MeetPage} />
            <Route path='/account' exact component={AccountPage} />
            <Route path='/*' exact component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default Routes;