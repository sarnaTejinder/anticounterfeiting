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
        flexDirection: "column",
      }}
    >
      {loading ? (
        <Spinner animation="border" role="status" size="lg" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontSize: 24,
              marginBottom: 12,
              color: palette.primary,
            }}
          >
            Alloy
          </h2>
          <span
            style={{
              fontSize: 16,
              marginBottom: 18,
              color: palette.label_grey,
            }}
          >
            An Anti-Counterfeiting System!
          </span>
          <span
            style={{
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            This product is brought to you by {`${product?.company?.name}`}
          </span>
          <span
            style={{
              fontSize: 16,
              marginBottom: 12,
              color: palette.primary_light,
            }}
          >
            {`${product?.catalog?.name}`}
          </span>
          <span
            style={{
              fontSize: 16,
              marginBottom: 12,
              color: palette.primary_light,
              opacity: 0.6,
            }}
          >
            {`${product?.catalog?.description}`}
          </span>

          <span
            style={{
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            Sold by {`${product?.seller?.name}`}
          </span>
          <span
            style={{
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            Seller Address: {`${product?.seller?.address}`}
          </span>
          <span
            style={{
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            Seller Wallet Address: {`${product?.seller?.wallet_address}`}
          </span>
        </div>
      )}
    </Container>
  );
};
