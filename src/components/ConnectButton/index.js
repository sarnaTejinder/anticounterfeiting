import React, { useContext, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import WalletContext from "../../contexts/WalletContext";
import { FaWallet } from "react-icons/fa";
import IconButton from "../IconButton";
import { useHistory } from "react-router-dom";

export default function ConnectButton() {
  const { errorStatus, connectWallet, currentAccount } =
    useContext(WalletContext);

  const [show, setShow] = useState(true);
  const history = useHistory();

  if (!currentAccount) {
    if (errorStatus === 1) {
      return (
        <Alert variant="danger" show={show} onClose={() => setShow(false)}>
          <Alert.Heading>Error occurred</Alert.Heading>
          <p>
            Please install Metamask from{" "}
            <a href="https://metamask.io" target="_blank" rel="noreferrer">
              https://metamask.io/
            </a>
          </p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="danger">
              Close
            </Button>
          </div>
        </Alert>
      );
    } else if (errorStatus === 2) {
      return (
        <Alert variant="danger" show={show}>
          <Alert.Heading>Oh snap! Something went Wrong!</Alert.Heading>
          <p>Please check javascript console to see what went wrong.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="danger">
              Close
            </Button>
          </div>
        </Alert>
      );
    }
    return (
      <IconButton
        onClick={connectWallet}
        icon={<FaWallet />}
        text="Connect Wallet"
      />
    );
  }

  return (
    <Button
      onClick={() => {
        history.replace("/dashboard");
      }}
    >
      Go to Console
    </Button>
  );
}
