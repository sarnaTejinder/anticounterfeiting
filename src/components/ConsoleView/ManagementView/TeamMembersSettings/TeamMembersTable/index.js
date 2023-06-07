import { useContext } from "react";
import { Container } from "react-bootstrap";
import TeamMembersContext from "../../../../../contexts/TeamMembersContext";
import { USER_LEVEL_INFO } from "../../../../../constants/userLevel";

export default function TeamMembersTable() {
  const { teamMembers } = useContext(TeamMembersContext);

  if (!teamMembers?.length) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <span>No Team Member registered.</span>
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
            <th scope="col">User Name</th>
            <th scope="col">Wallet Address</th>
            <th scope="col">User Type</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers?.map((member) => (
            <tr key={member?.wallet_address}>
              <th scope="row">
                {member?.first_name} {member?.last_name}
              </th>
              <td>{member?.wallet_address}</td>
              <td>{USER_LEVEL_INFO[member?.user_level]?.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
