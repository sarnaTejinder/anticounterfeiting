import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import CompanyContext from "./CompanyContext";
import UserContext from "./UserContext";
import { db } from "../firebase.config";

const { createContext, useContext, useState, useEffect } = require("react");

const TeamMembersContext = createContext({});

export function TeamMembersProvider({ children }) {
  const { company } = useContext(CompanyContext);
  const { user } = useContext(UserContext);
  const [teamMembers, setTeamMembers] = useState();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const usersRef = collection(db, "users");

  const getTeamMembers = async () => {
    if (loading) return;
    setLoading(true);
    const q = query(usersRef, where("company_id", "==", company.id));
    const teamMemberSnap = await getDocs(q);
    let teamMembersLocal = [];
    teamMemberSnap.forEach((teamMember) => {
      if (teamMember?.id !== user?.id) teamMembersLocal.push(teamMember.data());
    });
    setTeamMembers(teamMembersLocal);
    setLoading(false);
  };

  const addTeamMember = async (data) => {
    if (!data.wallet_address) return;
    setSaving(true);

    await setDoc(doc(usersRef, data.wallet_address), {
      ...data,
      company_id: company?.id,
    });
    await getTeamMembers();
    setSaving(false);
  };

  useEffect(() => {
    // if (company && company?.id) getTeamMembers();
  }, [company?.id]);

  return (
    <TeamMembersContext.Provider
      value={{ loading, teamMembers, getTeamMembers, addTeamMember }}
    >
      {children}
    </TeamMembersContext.Provider>
  );
}

export default TeamMembersContext;
