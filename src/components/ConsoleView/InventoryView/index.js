import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Route, useHistory } from "react-router-dom";
import { useContext } from "react";
import InventoryContext from "../../../contexts/InventoryContext";
import InventoryTable from "./InventoryTable";
import CreateEditItem from "./CreateEditItem";
import ItemDetails from "./ItemDetails";
import palette from "../../../constants/palette";

export default function InventoryView() {
  const history = useHistory();
  const { loading, selected } = useContext(InventoryContext);
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
        <h4>Inventory</h4>
        <Button
          onClick={() => {
            history.replace("/inventory/new");
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
        <Row style={{ flex: 1 }}>
          <Col>
            <InventoryTable />
          </Col>

          <div
            style={{
              width: selected?.id ? "30%" : 0,
              borderLeft: `1px solid ${palette.light_grey}`,
              padding: 0,
              transition: "width 0.3s",
            }}
          >
            <ItemDetails />
          </div>
        </Row>
      )}
      <Route path="/inventory/new" component={CreateEditItem} />
    </div>
  );
}
