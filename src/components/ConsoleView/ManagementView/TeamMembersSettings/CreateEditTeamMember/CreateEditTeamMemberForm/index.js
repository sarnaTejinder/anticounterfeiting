import { useContext, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import TeamMembersContext from "../../../../../../contexts/TeamMembersContext";
import {
  USER_LEVELS,
  USER_LEVEL_INFO,
} from "../../../../../../constants/userLevel";

export default function CreateEditTeamMemberForm() {
  const { saving, addTeamMember } = useContext(TeamMembersContext);
  const [draft, setDraft] = useState({ user_level: 1 });
  const history = useHistory();

  const updateDraft = (key) => (value) => {
    setDraft((data) => ({ ...data, [key]: value }));
  };

  return (
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
              required
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
            <Form.Label>Wallet Address*</Form.Label>
            <Form.Control
              type="text"
              required
              value={draft?.wallet_address || ""}
              onChange={(e) => updateDraft("wallet_address")(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formUserAccess">
            <Form.Label>User Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={draft?.user_level || 1}
              onChange={(e) => updateDraft("user_level")(e.target.value)}
            >
              {Object.values(USER_LEVELS).map((level) => (
                <option key={level} value={level}>
                  {USER_LEVEL_INFO[level]?.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
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
              !draft?.wallet_address ||
              !draft?.wallet_address?.trim() ||
              saving
            }
            onClick={async () => {
              await addTeamMember(draft);
              history.replace("/manage/users");
            }}
          >
            {saving ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Add Team Member"
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
