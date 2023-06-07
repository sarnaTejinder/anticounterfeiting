import { Route, Switch } from "react-router-dom";
import SellersSettings from "./SellersSettings";
import CompanySettings from "./CompanySettings";
import TeamMembersSettings from "./TeamMembersSettings";

export default function ManagementView() {
  return (
    <Switch>
      <Route path="/manage/sellers">
        <SellersSettings />
      </Route>
      <Route path="/manage/company">
        <CompanySettings />
      </Route>
      <Route path="/manage/users">
        <TeamMembersSettings />
      </Route>
    </Switch>
  );
}
