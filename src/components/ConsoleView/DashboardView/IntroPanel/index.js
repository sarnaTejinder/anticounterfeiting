import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function IntroPanel() {
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
            <Link to="/inventory">
              <span className="text-primary">Manage Inventory</span>
            </Link>
          </Row>
          <Row className="mb-3">
            <Link to="/manage/users">
              <span className="text-primary">Add Team Members</span>
            </Link>
          </Row>
          <Row className="mb-3">
            <Link to="/catalog">
              <span className="text-primary">Add Products to Catalog</span>
            </Link>
          </Row>
          <Row className="mb-3">
            <Link to="/manage/sellers">
              <span className="text-primary">Add Seller(s)</span>
            </Link>
          </Row>
        </Col>
        <Col>
          <Row className="mb-3">
            <span>About Us</span>
          </Row>
          <Row className="mb-3">
            <Link
              to={{
                hash: "#home",
              }}
              target="_blank"
            >
              <span className="text-primary">What is Alloy ?</span>
            </Link>
          </Row>
          <Row className="mb-3">
            <Link
              to={{
                hash: "#about",
              }}
              target="_blank"
            >
              <span className="text-primary">
                How is Alloy an anti counterfeiting system ?
              </span>
            </Link>
          </Row>
          <Row className="mb-3">
            <Link
              to={{
                hash: "#flow",
              }}
              target="_blank"
            >
              <span className="text-primary">
                How your company can benefit by using Alloy ?
              </span>
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
