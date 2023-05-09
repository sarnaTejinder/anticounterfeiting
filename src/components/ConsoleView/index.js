import { Col, Row } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PageNotFound from "../../pages/PageNotFound";
import DashboardView from "./DashboardView";
import SideBar from "./SideBar";
import InventoryView from "./InventoryView";
import CatalogView from "./CatalogView";
import ManagementView from "./ManagementView";

export default function ConsoleView() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <SideBar />
      <Col>
        <Switch>
          <Route path="/dashboard">
            <DashboardView />
          </Route>
          <Route path="/inventory">
            <InventoryView />
          </Route>
          <Route path="/catalog">
            <CatalogView />
          </Route>
          <Route path="/manage">
            <ManagementView />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Col>
    </div>
  );
}
