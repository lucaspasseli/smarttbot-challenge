import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
  </Switch>
);
export default Routes;
