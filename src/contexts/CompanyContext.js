import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import UserContext from "./UserContext";
import { db } from "../firebase.config";

const {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} = require("react");

const CompanyContext = createContext({});

export function CompanyProvider({ children }) {
  const { user, addCompany } = useContext(UserContext);
  const [company, setCompany] = useState();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const companyRef = collection(db, "companies");

  const getCompany = useCallback(async () => {
    if (user && user.company_id) {
      setLoading(true);
      const companySnap = await getDoc(doc(companyRef, user.company_id));

      if (companySnap.exists()) {
        setCompany(companySnap.data());
      }
      setLoading(false);
    }
  }, [user]);

  const registerCompany = async (data) => {
    if (!user || user.company_id) return;
    setSaving(true);
    const companyDoc = doc(companyRef);
    const companyId = companyDoc.id;
    await setDoc(doc(companyRef, companyId), {
      ...data,
      founder: user?.id,
      id: companyId,
    });
    await addCompany(companyId);
    setSaving(false);
  };

  useEffect(() => {
    // getCompany();
  }, [user, getCompany]);

  useEffect(() => {
    let unsubscribe;
    if (company?.id) {
      // unsubscribe = onSnapshot(doc(companyRef, company?.id), (doc) => {
      //   setCompany(doc.data());
      // });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [company?.id]);

  return (
    <CompanyContext.Provider
      value={{ company, loading, saving, registerCompany }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export default CompanyContext;
