import { useContext, useEffect } from "react";
import WalletContext from "../../contexts/WalletContext";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import CompanyContext from "../../contexts/CompanyContext";
import UserContext from "../../contexts/UserContext";

const HomePage = () => {
  const { loading, currentAccount } = useContext(WalletContext);
  const { registerCompany } = useContext(CompanyContext);
  const { user } = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    if (!currentAccount && loading === false) {
      history.replace("/home");
    }
  }, [currentAccount, history, loading]);

  useEffect(() => {
    if (user && !user?.company_id) {
      registerCompany({ name: "Hello" });
    }
  }, [user]);

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
      <h1>Home</h1>
    </Container>
  );
};

export default HomePage;
