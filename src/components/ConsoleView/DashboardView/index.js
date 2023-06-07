import { useContext } from "react";
import { Container } from "react-bootstrap";
import UserContext from "../../../contexts/UserContext";
import IntroPanel from "./IntroPanel";

export default function DashboardView() {
  const { skipIntro } = useContext(UserContext);

  return (
    <Container fluid style={{ display: "flex", flex: 1, height: "100%" }}>
      {skipIntro === false ? <IntroPanel /> : <></>}
    </Container>
  );
}
