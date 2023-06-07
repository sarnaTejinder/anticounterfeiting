import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import CompanyContext from "./CompanyContext";
import { db } from "../firebase.config";

const { createContext, useContext, useState, useEffect } = require("react");

const ProductCatalogueContext = createContext({});

export function ProductCatalogueProvider({ children }) {
  const { company } = useContext(CompanyContext);
  const [catalogs, setCatalogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const companyRef = collection(db, "companies");

  const addNewCatalog = async (data) => {
    if (!company?.id) return;
    setSaving(true);
    const catalogDoc = doc(collection(companyRef, company.id, "catalogs"));
    const catalog_id = catalogDoc?.id;
    await setDoc(doc(companyRef, company.id, "catalogs", catalog_id), {
      ...data,
      id: catalog_id,
    });
    setSaving(false);
    getCatalogs();
  };

  const getCatalogs = async () => {
    if (!company?.id) return;
    setLoading(true);
    const sellerCollection = collection(companyRef, company.id, "catalogs");
    const q = query(sellerCollection, null);
    const catalogsSnap = await getDocs(q);
    let fetchedCatalogs = [];
    catalogsSnap.forEach((seller) => fetchedCatalogs.push(seller.data()));
    setCatalogs(fetchedCatalogs);
    setLoading(false);
  };

  useEffect(() => {
    if (company?.id) getCatalogs();
  }, [company?.id]);

  return (
    <ProductCatalogueContext.Provider
      value={{
        loading,
        saving,
        catalogs,
        addNewCatalog,
        getCatalogs,
      }}
    >
      {children}
    </ProductCatalogueContext.Provider>
  );
}

export default ProductCatalogueContext;
