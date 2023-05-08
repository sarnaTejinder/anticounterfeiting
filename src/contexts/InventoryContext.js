const { createContext } = require("react");

const InventoryContext = createContext({});

export function InventoryProvider({ children }) {
  return (
    <InventoryContext.Provider value={{}}>{children}</InventoryContext.Provider>
  );
}

export default InventoryContext;
