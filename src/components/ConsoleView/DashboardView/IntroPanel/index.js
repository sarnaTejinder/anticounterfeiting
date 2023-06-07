import { useContext } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import UserContext from "../../../../contexts/UserContext";

export default function IntroPanel() {
  const { skipIntro, removeIntro } = useContext(UserContext);
  return (
    <Container
      style={{
        paddingTop: 96,
        paddingBottom: 96,
        paddingLeft: 64,
        paddingRight: 64,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Row className="mb-2">
        <Col>
          <h2>Welcome to Alloy!</h2>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h5 className="text-muted">Security Evolved</h5>
        </Col>
      </Row>
      <Row style={{ justifyContent: "space-between" }} className="mb-5">
        <Col>
          <Row className="mb-3">
            <span>Quick Links</span>
          </Row>
          <Row className="mb-3">
            <span className="text-primary">Manage Inventory</span>
          </Row>
          <Row className="mb-3">
            <span className="text-primary">Add Team Members</span>
          </Row>
          <Row className="mb-3">
            <span className="text-primary">Add Products to Catalog</span>
          </Row>
          <Row className="mb-3">
            <span className="text-primary">Add Seller(s)</span>
          </Row>
        </Col>
        <Col>
          <Row className="mb-3">
            <span>About Us</span>
          </Row>
          <Row className="mb-3">
            <span className="text-primary">What is Alloy ?</span>
          </Row>
          <Row className="mb-3">
            <span className="text-primary">
              How is Alloy an anti counterfeiting system ?
            </span>
          </Row>
          <Row className="mb-3">
            <span className="text-primary">
              How your company can benefit by using Alloy ?
            </span>
          </Row>
        </Col>
      </Row>
      <Row style={{ flex: 1, display: "flex", alignItems: "end" }}>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Form>
            <Form.Group>
              <Row>
                <Form.Check
                  type="checkbox"
                  label="Show Welcome page on Startup"
                  checked={!skipIntro}
                  onChange={removeIntro}
                />
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
