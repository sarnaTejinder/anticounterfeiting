import { Container, Modal, Row } from "react-bootstrap";
import CreateEditSellerForm from "./CreateEditSellerForm";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateEditSeller() {
  const [show, setShow] = useState(true);
  const history = useHistory();

  return (
    <Modal
      show={show}
      onHide={() => {
        setShow(false);
        setTimeout(() => {
          history.replace("/manage/sellers");
        }, 150);
      }}
    >
      <Container
        style={{
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #ced4da",
          padding: 12,
          justifyContent: "space-between",
          flexDirection: "row",
          display: "flex",
          marginBottom: 8,
          borderRadius: "8px 8px 0 0",
        }}
      >
        <h5>Add New Seller</h5>
      </Container>
      <Container
        style={{
          paddingBottom: 8,
        }}
      >
        <CreateEditSellerForm />
      </Container>
    </Modal>
  );
}
