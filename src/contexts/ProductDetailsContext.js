import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase.config";
import ContractContext from "./ContractContext";

const { createContext, useContext, useState, useEffect } = require("react");

const ProductDetailsContext = createContext({});

export function ProductDetailsProvider({ children }) {
  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(false);
  const { verifyProduct } = useContext(ContractContext);

  const productsRef = collection(db, "products");
  const companyRef = collection(db, "companies");

  const fetchDetails = async (id) => {
    if (!id) return;
    setLoading(true);
    try {
      let productData;
      let companyData;
      let catalogData;
      let sellerData;
      const isAddedToBlockchain = await verifyProduct(id);
      if (isAddedToBlockchain) {
        const productDoc = doc(productsRef, id);
        const productSnap = await getDoc(productDoc);
        if (productSnap.exists()) {
          const product = productSnap.data();
          if (product?.company_id) {
            productData = product;
            const companyDoc = doc(companyRef, product?.company_id);
            const companySnap = await getDoc(companyDoc);
            if (companySnap.exists()) {
              const company = companySnap.data();
              companyData = company;

              const catalogDoc = doc(
                companyRef,
                company.id,
                "catalogs",
                product?.type
              );
              const catalogSnap = await getDoc(catalogDoc);
              if (catalogSnap.exists()) {
                const catalog = catalogSnap.data();
                catalogData = catalog;
              }
              const sellerDoc = doc(
                companyRef,
                company.id,
                "sellers",
                product?.seller
              );
              const sellerSnap = await getDoc(sellerDoc);
              if (sellerSnap.exists()) {
                sellerData = sellerSnap.data();
              }
            }
          }
        }
      }
      if (productData?.id)
        setProduct({
          product: productData,
          company: companyData,
          seller: sellerData,
          catalog: catalogData,
        });
    } catch (e) {}
    setLoading(false);
  };

  useEffect(() => {
    // fetchDetails("cK9LE4WKTjHPr8NlxGeM");
  }, []);

  console.log(product);

  return (
    <ProductDetailsContext.Provider
      value={{
        loading,
        product,
        fetchDetails,
      }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
}

export default ProductDetailsContext;
