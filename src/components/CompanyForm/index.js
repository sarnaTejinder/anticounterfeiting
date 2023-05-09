import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import "./index.css";
import { useContext, useState } from "react";
import CompanyContext from "../../contexts/CompanyContext";

const CompanyForm = () => {
  const { saving, registerCompany } = useContext(CompanyContext);
  const [draft, setDraft] = useState({});

  const updateDraft = (key) => (value) => {
    setDraft((data) => ({ ...data, [key]: value }));
  };

  return (
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
              <span>Please describe what what your company is about.</span>
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
            disabled={!draft?.name || !draft?.name?.trim() || saving}
            onClick={() => {
              registerCompany(draft);
            }}
          >
            {saving ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Get Started"
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CompanyForm;
