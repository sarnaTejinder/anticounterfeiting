import { useContext, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ProductCatalogueContext from "../../../../../contexts/ProductCatalogueContext";

export default function CreateEditCatalogForm() {
  const { saving, addNewCatalog } = useContext(ProductCatalogueContext);
  const [draft, setDraft] = useState({});
  const history = useHistory();

  const updateDraft = (key) => (value) => {
    setDraft((data) => ({ ...data, [key]: value }));
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>Product Name*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Alloy"
          required
          value={draft?.name || ""}
          onInput={(e) => {
            updateDraft("name")(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>Product Description*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Alloy is an anti counterfeiting system"
          required
          value={draft?.description || ""}
          onInput={(e) => {
            updateDraft("description")(e.target.value);
          }}
        />
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
              !draft?.name ||
              !draft?.name?.trim() ||
              !draft?.description ||
              !draft?.description?.trim() ||
              saving
            }
            onClick={async () => {
              await addNewCatalog(draft);
              history.replace("/catalog");
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
