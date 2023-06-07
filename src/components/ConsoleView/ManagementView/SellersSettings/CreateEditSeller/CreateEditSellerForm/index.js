import { useContext, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import SellersContext from "../../../../../../contexts/SellersContext";
import { useHistory } from "react-router-dom";

export default function CreateEditSellerForm() {
  const { saving, addNewSeller } = useContext(SellersContext);
  const [draft, setDraft] = useState({});
  const history = useHistory();

  const updateDraft = (key) => (value) => {
    setDraft((data) => ({ ...data, [key]: value }));
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>Seller Name*</Form.Label>
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
        <Form.Label>Seller Address*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Alloy is an anti counterfeiting system"
          required
          value={draft?.address || ""}
          onInput={(e) => {
            updateDraft("address")(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>Seller Wallet Address*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Alloy is an anti counterfeiting system"
          required
          value={draft?.wallet_address || ""}
          onInput={(e) => {
            updateDraft("wallet_address")(e.target.value);
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
              !draft?.address ||
              !draft?.wallet_address ||
              !draft?.address?.trim() ||
              !draft?.wallet_address?.trim() ||
              saving
            }
            onClick={async () => {
              await addNewSeller(draft);
              history.replace("/manage/sellers");
            }}
          >
            {saving ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Add Seller"
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
