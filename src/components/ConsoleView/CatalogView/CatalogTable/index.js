import { useContext } from "react";
import { Container } from "react-bootstrap";
import ProductCatalogueContext from "../../../../contexts/ProductCatalogueContext";

export default function CatalogTable() {
  const { catalogs } = useContext(ProductCatalogueContext);

  if (!catalogs?.length) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <span>No Product Catalog registered.</span>
      </Container>
    );
  }

  return (
    <div
      className="table-responsive bg-white"
      style={{
        margin: 12,
        border: "1px solid #ced4da",
        borderRadius: 6,
        overflow: "hidden",
      }}
    >
      <table
        className="table mb-0"
        style={{
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {catalogs?.map((catalog) => (
            <tr key={catalog?.name}>
              <th scope="row">{catalog?.name}</th>
              <td>{catalog?.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
