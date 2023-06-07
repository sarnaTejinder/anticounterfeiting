import { useContext, useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import InventoryContext from "../../../../../contexts/InventoryContext";
import ProductCatalogueContext from "../../../../../contexts/ProductCatalogueContext";
import SellersContext from "../../../../../contexts/SellersContext";

export default function CreateEditItemForm() {
  const { saving, addProduct } = useContext(InventoryContext);
  const { catalogs, loading: loadingCatalogs } = useContext(
    ProductCatalogueContext
  );
  const { sellers, loading: loadingSellers } = useContext(SellersContext);
  const [draft, setDraft] = useState({});
  const history = useHistory();

  const updateDraft = (key) => (value) => {
    setDraft((data) => ({ ...data, [key]: value }));
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>Product ID*</Form.Label>
        <Form.Control
          type="text"
          required
          value={draft?.internal_id || ""}
          onInput={(e) => {
            updateDraft("internal_id")(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>Product Type*</Form.Label>
        {loadingCatalogs ? (
          <Card>
            <Card.Body>Loading Product Catalog</Card.Body>
          </Card>
        ) : (
          <>
            {catalogs?.length ? (
              <Form.Select
                type="text"
                placeholder="Alloy is an anti counterfeiting system"
                required
                value={draft?.type || ""}
                onInput={(e) => {
                  updateDraft("type")(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select Product Type
                </option>
                {catalogs.map((catalog) => (
                  <option value={catalog?.id}>{catalog.name}</option>
                ))}
              </Form.Select>
            ) : (
              <div>
                You don't have any product catalog. Please add that to proceed
                further. <Link to="/catalog/new">Add Catalog</Link>
              </div>
            )}
          </>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>Seller*</Form.Label>
        {loadingSellers ? (
          <Card>
            <Card.Body>Loading Seller </Card.Body>
          </Card>
        ) : (
          <>
            {sellers?.length ? (
              <Form.Select
                type="text"
                placeholder="Alloy is an anti counterfeiting system"
                required
                value={draft?.seller || ""}
                onInput={(e) => {
                  updateDraft("seller")(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select Seller
                </option>
                {sellers.map((seller) => (
                  <option value={seller?.id}>{seller?.name}</option>
                ))}
              </Form.Select>
            ) : (
              <div>
                You don't have any Sellers. Please add that to proceed further.{" "}
                <Link to="/manage/sellers/new">Add Seller</Link>
              </div>
            )}
          </>
        )}
      </Form.Group>
      <Row style={{ float: "right" }}>
        <Col>
          <Button
            style={{
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 16,
              minWidth: 150,
            }}
            disabled={
              !draft?.internal_id ||
              !draft?.internal_id?.trim() ||
              !draft?.type ||
              !draft?.seller ||
              saving
            }
            onClick={async () => {
              await addProduct(draft);
              history.replace("/inventory");
            }}
          >
            {saving ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Add Product"
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
