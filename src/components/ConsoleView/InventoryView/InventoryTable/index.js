import { useContext, useMemo } from "react";
import { Container } from "react-bootstrap";
import InventoryContext from "../../../../contexts/InventoryContext";
import palette from "../../../../constants/palette";
import ProductCatalogueContext from "../../../../contexts/ProductCatalogueContext";
import SellersContext from "../../../../contexts/SellersContext";

export default function InventoryTable() {
  const { products, selected, setSelected } = useContext(InventoryContext);

  if (!products?.length) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <span>No Product registered.</span>
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
            <th scope="col">id</th>
            <th scope="col">Product Type</th>
            <th scope="col">Seller</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <ListItem key={product?.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const ListItem = ({ product }) => {
  const { selected, setSelected } = useContext(InventoryContext);
  const { catalogs, loading: loadingCatalogs } = useContext(
    ProductCatalogueContext
  );
  const { sellers, loadingSellers } = useContext(SellersContext);

  const catalog = useMemo(() => {
    if (!loadingCatalogs) {
      const res = catalogs?.filter((catalog) => catalog?.id === product?.type);
      if (res?.length > 0) {
        return res[0];
      }
    }
    return { name: "" };
  }, [catalogs, loadingCatalogs, product]);

  const seller = useMemo(() => {
    if (!loadingSellers) {
      const res = sellers?.filter((seller) => seller?.id === product?.seller);
      if (res?.length > 0) {
        return res[0];
      }
    }
    return { name: "" };
  }, [sellers, loadingSellers, product]);

  return (
    <tr
      key={product?.id}
      style={{
        cursor: "pointer",
        backgroundColor:
          selected?.id === product?.id ? palette.bg_light_grey : "white",
      }}
      onClick={() => {
        if (selected?.id !== product?.id) {
          setSelected({
            ...product,
            extra: {
              catalog,
              seller,
            },
          });
        }
      }}
    >
      <td>{product?.internal_id}</td>
      <td>{catalog?.name}</td>
      <td>{seller?.name}</td>
    </tr>
  );
};
