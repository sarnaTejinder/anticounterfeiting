import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { Button, Col, Form, Row } from "react-bootstrap";
import { USER_LEVEL_INFO } from "../../constants/userLevel";
import Spinner from "react-bootstrap/Spinner";

export default function UserForm() {
  const { user, updateData, saving } = useContext(UserContext);
  const [draft, setDraft] = useState(user);

  const updateDraft = (key) => (value) => {
    setDraft((data) => ({ ...data, [key]: value }));
  };

  useEffect(() => {
    setDraft(user);
  }, [user]);

  useEffect(() => {
    if (!draft.user_level) setDraft((data) => ({ ...data, user_level: 1 }));
  }, [draft?.user_level]);

  return (
    <div style={{ minWidth: "40%" }}>
      <Row className="my-3">
        <h3>
          Let's get you <span style={{ color: "#a2d2ff" }}>Onboarded!</span>
        </h3>
      </Row>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                value={draft?.first_name || ""}
                onInput={(e) => {
                  updateDraft("first_name")(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                value={draft?.last_name || ""}
                onInput={(e) => {
                  updateDraft("last_name")(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Wallet Address</Form.Label>
              <Form.Control type="text" disabled value={user?.id} readOnly />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>User Type</span>
            <span
              style={{
                color: "white",
                backgroundColor: USER_LEVEL_INFO[user?.user_level ?? 1].color,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: 6,
                marginLeft: 12,
              }}
            >
              {USER_LEVEL_INFO[user?.user_level ?? 1].label}
            </span>
          </Col>
        </Row>
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
                !draft?.first_name ||
                !draft?.first_name?.trim() ||
                saving ||
                JSON.stringify(draft) === JSON.stringify(user)
              }
              onClick={() => updateData(draft)}
            >
              {saving ? (
                <Spinner animation="border" role="status" size="sm">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                "Save Details"
              )}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
