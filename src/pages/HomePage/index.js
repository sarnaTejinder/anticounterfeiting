import { useContext, useEffect } from "react";
import WalletContext from "../../contexts/WalletContext";
import { useHistory } from "react-router-dom";
import { Container, Toast } from "react-bootstrap";
import UserContext from "../../contexts/UserContext";
import UserForm from "../../components/UserForm.js";

const HomePage = () => {
  const { loading, currentAccount } = useContext(WalletContext);
  const { onboardingStep } = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    if (!currentAccount && loading === false) {
      history.replace("/home");
    }
  }, [currentAccount, history, loading]);

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
      <UserForm />
    </Container>
  );
};

export default HomePage;
