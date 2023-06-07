import { Button, Spinner } from "react-bootstrap";
import SellersTable from "./SellersTable";
import { Route, useHistory } from "react-router-dom";
import CreateEditSeller from "./CreateEditSeller";
import { useContext } from "react";
import SellersContext from "../../../../contexts/SellersContext";

export default function SellersSettings() {
  const history = useHistory();
  const { loading } = useContext(SellersContext);
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: 1,
      }}
    >
      <div
        style={{
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #ced4da",
          padding: "12px",
          justifyContent: "space-between",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <h4>Sellers</h4>
        <Button
          onClick={() => {
            history.replace("/manage/sellers/new");
          }}
        >
          Add New
        </Button>
      </div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Spinner animation="border" role="status" size="lg">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <SellersTable />
      )}
      <Route path="/manage/sellers/new" component={CreateEditSeller} />
    </div>
  );
}
