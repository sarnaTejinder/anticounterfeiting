import { useContext } from "react";
import SellersContext from "../../../../../contexts/SellersContext";
import { Container } from "react-bootstrap";

export default function SellersTable() {
  const { sellers } = useContext(SellersContext);

  if (!sellers?.length) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <span>No Sellers registered.</span>
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
            <th scope="col">Seller Name</th>
            <th scope="col">Address</th>
            <th scope="col">Wallet Address</th>
          </tr>
        </thead>
        <tbody>
          {sellers?.map((seller) => (
            <tr key={seller?.wallet_address}>
              <th scope="row">{seller?.name}</th>
              <td>{seller?.address}</td>
              <td>{seller?.wallet_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
