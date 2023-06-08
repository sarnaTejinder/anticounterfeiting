import { ethers } from "ethers";
import { createContext } from "react";
import contractABI from "../utils/contractABI.json";

const ContractContext = createContext({});

export function ContractProvider({ children }) {
  const addProduct = async (productId) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          "0x0F84eDe277e7310219f92e81E099Cb506D741660",
          contractABI,
          signer
        );
        let txn = await contract.addProduct(productId);
        const receipt = await txn.wait();
        return receipt;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const verifyProduct = async (productId) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          "0x0F84eDe277e7310219f92e81E099Cb506D741660",
          contractABI,
          signer
        );
        let txn = await contract.verifyProduct(productId);
        // boolean value
        console.log(txn);
        return txn;
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ContractContext.Provider value={{ addProduct, verifyProduct }}>
      {children}
    </ContractContext.Provider>
  );
}

export default ContractContext;
