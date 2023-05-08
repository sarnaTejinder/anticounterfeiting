import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import WalletContext from "./WalletContext";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { USER_LEVELS } from "../constants/userLevel";

const UserContext = createContext({});

export function UserProvider({ children }) {
  const { currentAccount } = useContext(WalletContext);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const usersRef = collection(db, "users");

  const registerUser = useCallback(async () => {
    if (currentAccount) {
      setLoading(true);

      await setDoc(
        doc(usersRef, currentAccount),
        {
          id: currentAccount,
          last_login: new Date(),
        },
        { merge: true }
      );

      const userSnap = await getDoc(doc(usersRef, currentAccount));

      if (userSnap.exists()) {
        setUser(userSnap.data());
      }
      setLoading(false);
    }
  }, [currentAccount]);

  const addCompany = async (companyId) => {
    if (!companyId) return;
    setSaving(true);
    await setDoc(
      doc(usersRef, currentAccount),
      {
        company_id: companyId,
        user_level: USER_LEVELS.ADMIN,
      },
      { merge: true }
    );
    setSaving(false);
  };

  useEffect(() => {
    if (currentAccount) {
      registerUser();
    }
  }, [currentAccount, registerUser]);

  useEffect(() => {
    let unsubscribe;
    if (currentAccount) {
      unsubscribe = onSnapshot(doc(usersRef, currentAccount), (doc) => {
        setUser(doc.data());
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  const hasCompanyAssigned = useMemo(() => {
    return user && user?.company_id;
  }, [user]);

  const onboardingStep = useMemo(() => {
    if (user) {
      if (!user.name) return "user_onboarding";
      if (!user.company_id) return "company_onboarding";
    }
    return null;
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        saving,
        addCompany,
        hasCompanyAssigned,
        onboardingStep,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
