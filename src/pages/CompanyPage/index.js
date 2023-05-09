import { useContext, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import CompanyForm from "../../components/CompanyForm";
import UserContext from "../../contexts/UserContext";

export default function CompanyPage() {
  const [step, setStep] = useState(1);
  const { user } = useContext(UserContext);
  return (
    <div style={{ minWidth: "40%" }}>
      {step === 1 && (
        <>
          <h3 className="mb-2">Welcome to Alloy!</h3>
          <div className="mb-3">There's no company assigned to you yet.</div>
          <Row>
            <Col>
              <Card style={{ maxWidth: 450 }}>
                <Card.Header>
                  <h5 className="text-center text-muted">Join a Company</h5>
                </Card.Header>
                <Card.Body>
                  <div className="mb-2">
                    To join a already registered company, please ask your
                    company admin to add you into the team.
                  </div>
                  <Row style={{ float: "right" }}>
                    <Col>
                      <Button
                        style={{ borderRadius: 6 }}
                        onClick={() => {
                          navigator.clipboard.writeText(user.id);
                        }}
                      >
                        Copy your Wallet Address
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ maxWidth: 450 }}>
                <Card.Header className="text-center text-muted">
                  <h5 className="text-center">Register a Company</h5>
                </Card.Header>
                <Card.Body>
                  <div className="mb-2">
                    Register your company into a new and secure Anti
                    Counterfeiting System.
                  </div>
                  <Row style={{ float: "right" }}>
                    <Col>
                      <Button
                        style={{ borderRadius: 6 }}
                        onClick={() => {
                          setStep(2);
                        }}
                      >
                        Register
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
      {step === 2 && (
        <>
          <h3 className="mb-2">Let's register your company!</h3>
          <div className="mb-3">
            We will need some details about the company.
          </div>
          <CompanyForm />
        </>
      )}
    </div>
  );
}
