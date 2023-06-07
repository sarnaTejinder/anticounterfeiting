import { useContext, useEffect } from "react";
import ProductDetailsContext, {
  ProductDetailsProvider,
} from "../../contexts/ProductDetailsContext";
import PageNotFound from "../PageNotFound";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import palette from "../../constants/palette";

export default function ProductPage({ match }) {
  const { id } = match?.params || {};
  if (!id) return <PageNotFound />;
  return (
    <ProductDetailsProvider>
      <ProductDetails id={id} />
    </ProductDetailsProvider>
  );
}

const ProductDetails = ({ id }) => {
  const { loading, product, fetchDetails } = useContext(ProductDetailsContext);

  useEffect(() => {
    fetchDetails(id);
  }, [id]);

  if (!loading && !product?.product)
    return (
      <div style={{ height: "100vh" }}>
        <PageNotFound />
      </div>
    );

  return (
    <Container
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {loading ? (
        <Spinner animation="border" role="status" size="lg" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <div className="text-middle">Alloy</div>
          <div className="text-muted">A secure Anti-Counterfeiting system</div>

          <Row className="mt-3">
            <Col>
              This product is owned by the company {product?.company?.name}.
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              Product Details: {product?.catalog?.name} -{" "}
              {product?.catalog?.description}
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              It is sold by the seller {product?.seller?.name} at{" "}
              {product?.seller?.address}.
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>Sellers Wallet: {product?.seller?.wallet_address}</Col>
          </Row>
        </div>
      )}
    </Container>
  );
};
