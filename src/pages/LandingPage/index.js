import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import WalletContext from "../../contexts/WalletContext";
import { Card, Container, Image } from "react-bootstrap";
import ConnectButton from "../../components/ConnectButton";
import palette from "../../constants/palette";

const LandingPage = () => {
  const { currentAccount } = useContext(WalletContext);

  const history = useHistory();

  return (
    <Container
      style={{
        height: "100%",
        scrollBehavior: "smooth",
        scrollSnapType: "y proximity",
      }}
    >
      <Home />
      <About />
      <Flow />
    </Container>
  );
};

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        scrollSnapAlign: "start",
      }}
      id="home"
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}>Alloy</h1>
        <div className="text-muted mt-2">
          We make your products secure from Counterfeiting
        </div>
        <div className="mt-3">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        scrollSnapAlign: "start",
      }}
      id="about"
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center", color: palette.primary }}>
          What is Alloy?
        </h2>

        <div
          className="mt-3"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Card
            style={{
              maxWidth: "70%",
            }}
          >
            <Card.Body
              style={{
                textAlign: "justify",
              }}
            >
              {`Alloy is an innovative major project focused on developing a
              robust and efficient anti-counterfeiting system utilizing the
              power of blockchain technology. In today's globalized marketplace,
              counterfeit products pose a significant threat to businesses,
              consumers, and economies worldwide.`}
            </Card.Body>
            <Card.Body
              style={{
                textAlign: "justify",
                paddingTop: 0,
              }}
            >
              The primary objective of Alloy is to establish a comprehensive
              anti-counterfeiting solution that ensures the authenticity of
              products throughout their entire supply chain, from manufacturing
              to the end consumer. By leveraging blockchain's decentralized
              nature, the system eliminates the reliance on centralized
              authorities, thereby enhancing trust, traceability, and
              accountability.
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Flow = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        scrollSnapAlign: "start",
      }}
      id="flow"
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ textAlign: "center", color: palette.primary }}>
          How can Alloy help you?
        </h2>
        <div
          className="mt-3"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Card
            style={{
              maxWidth: "70%",
            }}
            className="mb-2"
          >
            <Card.Body style={{ textAlign: "justify" }}>
              Alloy employs a unique identification system that assigns each
              product a digital certificate on the blockchain, containing
              immutable records of its origin, manufacturing details, and supply
              chain history. This certificate acts as a digital fingerprint,
              ensuring that every product can be uniquely identified and
              verified by scanning its unique hashed identifier, as a QR code.
              Consumers can effortlessly validate the authenticity of a product
              by simply scanning the identifier with a smartphone, gaining
              access to its history and confirming its legitimacy.
            </Card.Body>
          </Card>
          <Image
            src={require("../../assets/flow.png")}
            width="70%"
            style={{
              borderRadius: 6,
              border: `1px solid ${palette.light_grey}`,
              padding: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
