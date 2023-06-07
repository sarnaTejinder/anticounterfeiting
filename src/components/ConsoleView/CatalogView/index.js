import { Button, Spinner } from "react-bootstrap";
import { Route, useHistory } from "react-router-dom";
import { useContext } from "react";
import ProductCatalogueContext from "../../../contexts/ProductCatalogueContext";
import CatalogTable from "./CatalogTable";
import CreateEditCatalog from "./CreateEditCatalog";

export default function CatalogView() {
  const history = useHistory();
  const { loading } = useContext(ProductCatalogueContext);
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
        <h4>Product Catalog</h4>
        <Button
          onClick={() => {
            history.replace("/catalog/new");
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
        <CatalogTable />
      )}
      <Route path="/catalog/new" component={CreateEditCatalog} />
    </div>
  );
}
