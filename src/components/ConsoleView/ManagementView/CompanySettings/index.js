import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import CompanyContext from "../../../../contexts/CompanyContext";
import { useContext, useState } from "react";

export default function CompanySettings() {
  const { saving, updateCompany, company } = useContext(CompanyContext);
  const [draft, setDraft] = useState(company);

  const updateDraft = (key) => (value) => {
    setDraft((data) => ({ ...data, [key]: value }));
  };

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
          padding: "12px ",
        }}
      >
        <h4>Company Settings</h4>
      </div>
      <div
        style={{
          padding: 12,
          maxWidth: "60%",
        }}
      >
        <div className="mb-3 text-muted">
          These details are shown to customers when they scan your products.
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>Company Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Alloy"
              value={draft?.name || ""}
              onInput={(e) => {
                updateDraft("name")(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Alloy is an anti counterfeiting system"
              value={draft?.description || ""}
              onInput={(e) => {
                updateDraft("description")(e.target.value);
              }}
            />
            <Form.Text>
              <Row>
                <Col>
                  <span>Please describe what your company is about.</span>
                </Col>
              </Row>
            </Form.Text>
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
                  saving ||
                  JSON.stringify(draft) === JSON.stringify(company)
                }
                onClick={() => {
                  updateCompany(draft);
                }}
              >
                {saving ? (
                  <Spinner animation="border" role="status" size="sm">
                    <span className="visually-hidden">Saving...</span>
                  </Spinner>
                ) : (
                  "Save"
                )}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
