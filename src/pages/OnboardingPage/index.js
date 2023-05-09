import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserForm from "../../components/UserForm.js";
import CompanyPage from "../CompanyPage";

export default function OnboardingPage() {
  const { onboardingStep, loading } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (onboardingStep === null && !loading) history.replace("/dashboard");
  }, [onboardingStep, loading]);

  if (loading) return null;

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {onboardingStep === "user_onboarding" && <UserForm />}
      {onboardingStep === "company_onboarding" && <CompanyPage />}
    </Container>
  );
}
