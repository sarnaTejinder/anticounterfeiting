import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase.config";
import CompanyContext from "./CompanyContext";
import UserContext from "./UserContext";

const { createContext, useContext, useState, useEffect } = require("react");

const InventoryContext = createContext({});

export function InventoryProvider({ children }) {
  const { company } = useContext(CompanyContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [selected, setSelected] = useState({});

  const productsRef = collection(db, "products");

  const getProducts = async () => {
    if (!company?.id) return;
    setLoading(true);
    const q = query(productsRef, where("company_id", "==", company.id));
    const productsSnap = await getDocs(q);
    let products = [];
    productsSnap.forEach((product) => {
      products.push(product.data());
    });
    setProducts(products);
    setLoading(false);
  };

  const addProduct = async (data) => {
    if (!company?.id) return;
    setSaving(true);
    const productDoc = doc(productsRef);
    const productId = productDoc?.id;

    await setDoc(doc(productsRef, productId), {
      ...data,
      company_id: company?.id,
      id: productId,
    });

    await getProducts();
    setSaving(false);
  };

  useEffect(() => {
    if (company && company?.id) getProducts();
  }, [company?.id]);

  return (
    <InventoryContext.Provider
      value={{
        products,
        getProducts,
        loading,
        saving,
        addProduct,
        selected,
        setSelected,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export default InventoryContext;
