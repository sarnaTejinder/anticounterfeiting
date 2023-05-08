const { createContext } = require("react");

const ProductCatalogueContext = createContext({});

export function ProductCatalogueProvider({ children }) {
  return (
    <ProductCatalogueContext.Provider value={{}}>
      {children}
    </ProductCatalogueContext.Provider>
  );
}

export default ProductCatalogueContext;
