import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Button, Col, Form, Row, Toast } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import IconButton from "../IconButton";

export default function UserForm() {
  const { user, updateData } = useContext(UserContext);

  return (
    <div style={{ minWidth: "40%" }}>
      <Row className="my-3">
        <p className="h3">
          Let's get you <span style={{ color: "#a2d2ff" }}>Onboarded!</span>
        </p>
      </Row>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="John" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Doe" />
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
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>User Level</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={user?.user_level}
                readOnly
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={{ float: "right" }}>
          <Col>
            <IconButton icon={<FaArrowRight size={14} />} text="Next" />
          </Col>
        </Row>
      </Form>
    </div>
  );
}
