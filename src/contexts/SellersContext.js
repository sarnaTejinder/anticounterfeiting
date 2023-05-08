const { createContext } = require("react");

const SellersContext = createContext({});

export function SellersProvider({ children }) {
  return (
    <SellersContext.Provider value={{}}>{children}</SellersContext.Provider>
  );
}

export default SellersContext;
