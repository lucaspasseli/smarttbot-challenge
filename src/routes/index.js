import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/register" component={Register} />
  </Switch>
);
export default Routes;
