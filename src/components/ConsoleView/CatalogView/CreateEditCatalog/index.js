import { Container, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import CreateEditCatalogForm from "./CreateEditCatalogForm";

export default function CreateEditCatalog() {
  const [show, setShow] = useState(true);
  const history = useHistory();

  return (
    <Modal
      show={show}
      onHide={() => {
        setShow(false);
        setTimeout(() => {
          history.replace("/catalog");
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
        <h5>Add New Product Catalog</h5>
      </Container>
      <Container
        style={{
          paddingBottom: 8,
        }}
      >
        <CreateEditCatalogForm />
      </Container>
    </Modal>
  );
}
