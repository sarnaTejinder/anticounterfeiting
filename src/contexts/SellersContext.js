import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import CompanyContext from "./CompanyContext";
import { db } from "../firebase.config";

const { createContext, useContext, useState, useEffect } = require("react");

const SellersContext = createContext({});

export function SellersProvider({ children }) {
  const { company } = useContext(CompanyContext);
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const companyRef = collection(db, "companies");

  const addNewSeller = async (data) => {
    if (!company?.id) return;
    setSaving(true);
    const sellerDoc = doc(collection(companyRef, company.id, "sellers"));
    const seller_id = sellerDoc?.id;
    await setDoc(doc(companyRef, company.id, "sellers", seller_id), {
      ...data,
      id: seller_id,
    });
    setSaving(false);
    getSellers();
  };

  const getSellers = async () => {
    if (!company?.id) return;
    setLoading(true);
    const sellerCollection = collection(companyRef, company.id, "sellers");
    const q = query(sellerCollection, null);
    const sellersSnap = await getDocs(q);
    let fetchedSellers = [];
    sellersSnap.forEach((seller) => fetchedSellers.push(seller.data()));
    setSellers(fetchedSellers);
    setLoading(false);
  };

  useEffect(() => {
    if (company?.id) getSellers();
  }, [company?.id]);

  return (
    <SellersContext.Provider
      value={{ addNewSeller, sellers, loading, saving, getSellers }}
    >
      {children}
    </SellersContext.Provider>
  );
}

export default SellersContext;
