import { useContext } from "react";
import InventoryContext from "../../../../contexts/InventoryContext";
import { Col, Container, Row } from "react-bootstrap";
import IconButton from "../../../IconButton";
import { FiX } from "react-icons/fi";
import { QRCodeSVG } from "qrcode.react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ItemPdf from "./ItemPdf";
import CompanyContext from "../../../../contexts/CompanyContext";

export default function ItemDetails() {
  const { selected, setSelected } = useContext(InventoryContext);
  const { company } = useContext(CompanyContext);

  if (!selected?.id) return null;

  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Item Details</span>
        <span>
          <IconButton
            icon={<FiX />}
            onClick={() => {
              setSelected({});
            }}
          />
        </span>
      </div>
      <Container className="mt-2">
        <Row>
          <Col>
            <span>id</span>
          </Col>
          <Col>
            <span>{selected?.internal_id}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Product Type</span>
          </Col>
          <Col>
            <span>{selected?.extra?.catalog?.name}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Product Description</span>
          </Col>
          <Col>
            <span>{selected?.extra?.catalog?.description}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Seller Name</span>
          </Col>
          <Col>
            <span>{selected?.extra?.seller?.name}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Seller Address</span>
          </Col>
          <Col>
            <span>{selected?.extra?.seller?.address}</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Seller Wallet Address</span>
          </Col>
          <Col>
            <span>{selected?.extra?.seller?.wallet_address}</span>
          </Col>
        </Row>
        <QRCodeSVG
          value={`${window?.parent?.origin}/product/${selected?.id}`}
          size={300}
          width="100%"
          className="mt-3"
        />
        <div
          className="mt-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <PDFDownloadLink
            document={
              <ItemPdf
                value={`${window?.parent?.origin}/product/${selected?.id}`}
                data={{ ...selected, company }}
              />
            }
            fileName={`${selected?.internal_id}.pdf`}
            className="btn btn-primary"
          >
            Download Pdf
          </PDFDownloadLink>
        </div>
      </Container>
    </div>
  );
}
