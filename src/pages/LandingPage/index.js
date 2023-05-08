import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import WalletContext from "../../contexts/WalletContext";
import { Container } from "react-bootstrap";
import ConnectButton from "../../components/ConnectButton";

const LandingPage = () => {
  const { currentAccount } = useContext(WalletContext);

  const history = useHistory();

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Landing Page</h1>
      <ConnectButton />
    </Container>
  );
};

export default LandingPage;
